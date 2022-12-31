import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  // -------- Switch is used to determine how to change and update the state --------
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        // ------- Return a new array --------
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// -------- State when the app loads --------
const initialState = {
  budget: 3000,
  expenses: [
    { id: 8, name: 'Groceries', cost: 100 },
    { id: 23, name: 'Gas', cost: 30 },
    { id: 24, name: 'Rent', cost: 500 },
    { id: 29, name: 'Food', cost: 500 },
  ],
};

// -------- Context (Components import and use to receive the state) --------
export const AppContext = createContext();

// -------- AppProvider will hold the state and pass to the components --------
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // --- Reducer will calculate and return the next state ---

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
