import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// -------- State when the app loads --------
const initialState = {
  budget: 3000,
  total_expenses: [
    { id: 8, name: 'Groceries', cost: 100 },
    { id: 23, name: 'Gas', cost: 30 },
    { id: 24, name: 'Rent', cost: 500 },
  ],
};

// -------- Context (Components import and use to receive the state) --------
export const AppContext = createContext();

// -------- AppProvider will hold the state and pass to the components --------
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
