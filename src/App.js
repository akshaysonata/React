import { useState } from 'react';
import './App.css';

function App() {
  const [toggleTextVisible, setToggleTextVisible] = useState(false)
  return (
    <div className="App">
      <p>Testing First Test Case</p>
      {toggleTextVisible && <p>Testing Show and hide</p>}
      <button onClick={() => { setToggleTextVisible(!toggleTextVisible) }}>
        Click
      </button>
    </div>
  );
}

export default App;
