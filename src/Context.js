import { createContext, useReducer } from "react";

export const themContext = createContext();

const initThem = {
  darkMode: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initThem);

  return (
    <themContext.Provider value={{ state, dispatch }}>
      {children}
    </themContext.Provider>
  );
};
