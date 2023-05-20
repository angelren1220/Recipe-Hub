import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/loop_scroll.scss';

/* The useCallback hook, which memoizes (caching arguments so the function does having to run multiple times) the function so that it retains the same reference across re-renders unless its dependencies change. 
This is used to prevent unnecessary re-renders when the function is passed as a prop or used in an effect. */

const Loop = ({ outerStyle, innerStyle, children, dataReady, parentHeight }) => {
  // Create a ref for the content container
  const contentRef = useRef(null);

  // Create a ref for the scrollable container
  const scrollRef = useRef(null);

  // Store the height of the content container
  const [height, setHeight] = useState(0);

  // Store the number of additional cloned divs needed
  const [numDivs, setNumDivs] = useState(0);

  // Store the index of the expanded item
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Callback function to handle scrolling within the loop
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop; // Get the current scroll position
      const contentHeight = contentRef.current.offsetHeight; // Get the height of the content container

      // Check if the scroll position exceeds the height of the content
      if (scroll >= height) {
        const expandedItemHeight = contentRef.current.children[expandedIndex]?.offsetHeight || 0;
        const totalHeight = contentHeight + expandedItemHeight;
        const scrollPosition = (scroll - height) % totalHeight;
        const targetScroll = scrollPosition >= 0 ? scrollPosition + height : scrollPosition;
        scrollRef.current.scrollTop = targetScroll; // Adjust the scroll position to create a looping effect
      }
    }
  }, [scrollRef, height, contentRef, expandedIndex]);

  // Callback function to update the height of the content and scroll position
  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight; // Get the height of the content container
      setHeight(contentHeight); // Update the stored height
      
      // Calculate the number of additional cloned divs needed to fill the parent height
      const numDivs = Math.ceil(parentHeight / contentHeight) + 1;
      setNumDivs(numDivs); // Update the number of divs

      // Adjust the scroll position if an item is expanded
      if (expandedIndex !== null) {
        const expandedItemHeight = contentRef.current.children[expandedIndex].offsetHeight;
        scrollRef.current.scrollTop += expandedItemHeight - contentHeight;
      }
    }
  }, [parentHeight, expandedIndex]);

  // The updateHeight function is executed once when the component mounts, ensuring that the height and scroll position are correctly initialized.
  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  // Use ResizeObserver to track changes in content height
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      updateHeight(); // Update the height when the content size changes
    });

    // Observe the content container when it's available and the data is ready
    if (contentRef.current && dataReady) {
      observer.observe(contentRef.current);
    }

    // Disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [updateHeight, dataReady]);

  // Render a message if the data is not ready
  if (!dataReady) {
    return <div><h1>There's nothing left to show you!</h1></div>;
  }

  // Clone the children elements to fill the parent height
  // 1) Array(numDivs): Create a new array with numDivs elements. The elements are initially set to undefined.
  // 2) .fill(): Fill the array with undefined values.
  // 3) .map((_, index) => ...): Iterate over each element of the array using map(). The _ parameter is a placeholder for the current element, and index represents the index of the current element.
  // 4) <div key={backup-${index}}>{children}</div>: Create a <div> element with a unique key (backup-${index}) and the children prop as its content.
  // 5) The result of the map() method is a new array (clonedChildren) containing the cloned elements.
  const clonedChildren = Array(numDivs)
    .fill()
    .map((_, index) => (
      <div key={`backup-${index}`}>{children}</div>
    ));

  // Render the looping component
  return (
    <div className="infinite-scroll-loop-outer" style={outerStyle}>
      <div
        className="infinite-scroll-loop-inner"
        ref={scrollRef}
        style={innerStyle}
        onScroll={handleScroll}
      >
        {/* Cloned divs to create a seamless loop */}
        {clonedChildren}

        {/* Content container */}
        <div ref={contentRef}>{children}</div>

        {/* Cloned divs to create a seamless loop */}
        {clonedChildren}
      </div>
    </div>
  );
};

export default Loop;