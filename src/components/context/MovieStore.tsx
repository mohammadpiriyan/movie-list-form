import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
// ----------------------------------------------------------------
// type

type actions = {
  type: "ADD_TO_LIST" | "REMOVE_FROM_LIST" | "REMOVE_LIST";
  payload: any;
};

type MovieContext = {
  state: any[];
  dispatch: Dispatch<actions>;
};

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// createContext
const movieContext = createContext<MovieContext | []>([]);

// custom hook
export const useMovieStore = () => {
  return useContext(movieContext);
};

// ----------------------------------------------------------------
// function reducer

function MovieReducer(state: any[], action: actions) {
  switch (action.type) {
    case "ADD_TO_LIST":
      return [...state, action.payload];
    case "REMOVE_FROM_LIST":
      return state.filter((item) => item.id !== action.payload.id);
    // case "REMOVE_LIST":
      // return (state = []);
    default:
      return state;
  }
}

// ----------------------------------------------------------------
// MainBody
const MovieProvider = ({ children }: { children: ReactNode }) => {
  // reducer
  const [state, dispatch] = useReducer(MovieReducer, []);
  // state for newitem
  const [newItem, setNewItem] = useState({
    name: "",
    director: "",
    genre: "",
    year: "",
    about: "",
  });

  return (
    <movieContext.Provider value={{ state, dispatch, newItem, setNewItem }}>
      {children}
    </movieContext.Provider>
  );
};
export default MovieProvider;
// ----------------------------------------------------------------

// import {
//   Dispatch,
//   ReactNode,
//   createContext,
//   useContext,
//   useReducer,
// } from "react";

// type MovieContext = {
//   state: any[];
//   dispatch: Dispatch<actions>;
// };

// type actions = {
//   type: "ADD_TO_LIST";
//   payload: any;
// };

// const movieContext = createContext<MovieContext | []>([]);

// export const useMovieStore = () => {
//   return useContext(movieContext);
// };

// function MovieReducer(state: any[], action: actions) {
//   switch (action.type) {
//     case "ADD_TO_LIST":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

// const MovieProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(MovieReducer, []);

//   return (
//     <movieContext.Provider value={{ state, dispatch }}>
//       {children}
//     </movieContext.Provider>
//   );
// };

// export default MovieProvider;
