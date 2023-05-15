import { createContext, useState } from "react";

export const viewModeContext = createContext();

const viewModeProvider = function(props) {
  const [viewMode, setViewMode] = useState('recipes');

  //functions to change viewMode

  const loginView = function() {
    setViewMode('login');
  };

  const registerView = function() {
    setViewMode('register');
  };

  const recipesView = function() {
    setViewMode('recipes');
  };

  const loadingView = function() {
    setViewMode('loading');
  };

  const viewModeAdjust = { viewMode, loginView, registerView, recipesView, loadingView };

  return (
    <viewModeContext.Provider viewModeAdjust={viewModeAdjust}>
      {props.children}
    </viewModeContext.Provider>
  );
};