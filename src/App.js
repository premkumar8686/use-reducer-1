import { useReducer } from "react";

function App() {

  const counterReducer = (state, action) => {
    switch(action.type)
    {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      case 'Reset':
        return 0;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
     <h1>{count}</h1> 
     <button onClick={()=>{ dispatch({type: 'Increment'}) }}>Increment</button>
     <button onClick={()=>{ dispatch({type: 'Decrement'}) }}>Decrement</button>
     <button onClick={()=>{ dispatch({type: 'Reset'}) }}>Reset</button>
    </>
  );
}

export default App;
