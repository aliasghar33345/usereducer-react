import React, { useReducer } from 'react';
import CounterReducer from './CounterReduxer';

function App() {

   const Counter = ()=>{
    const [count , dispatch] = useReducer(CounterReducer,0);
    return(
      <>
      Counter: {count}
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
    </>
    )

   }



  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}

export default App;
