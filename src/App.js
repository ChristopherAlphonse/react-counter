import './style.css';
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p> Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Increment the counter </button>
      <button onClick={() => setCounter(counter - 1)}> Decrement the counter </button>
    </div>
  );
};

export default App;
