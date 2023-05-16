import { createContext, useState } from "react";

export const viewModeContext = createContext();

export default function ViewModeProvider(props) {
  const [viewMode, setViewMode] = useState('');

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

  const providerData = { viewMode, loginView, registerView, recipesView, loadingView };

  return (
    <viewModeContext.Provider value={providerData}>
      {props.children}
    </viewModeContext.Provider>
  );
};