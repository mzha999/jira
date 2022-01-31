import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}


const ReducerExample = () =>{
    const [state, dispatch] = useReducer(TodoReducer, []);
}

type Action =
  | {
      type: "add";
      payload: string;
    }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };
const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state;
  }
};
