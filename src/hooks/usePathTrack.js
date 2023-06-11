import { useReducer } from "react";
function usePathTrack() {
  const reducer = (state, action) => {
    if (action.type === "add" && state.back) {
      return { ...state, back: false };
    }
    switch (action.type) {
      case "add": {
        return { back: false, paths: [...state.paths, action.path] };
      }
      case "remove": {
        const newState = { ...state, back: true };
        newState.paths.pop();
        return newState;
      }
      default:
        return state;
    }
  };
  const [pathTrack, dispatch] = useReducer(reducer, { back: false, paths: [] });

  return [pathTrack, dispatch];
}

export default usePathTrack;
