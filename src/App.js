import React from 'react';
import './App.css';

function App() {
  const styles = {
    backgroundColor: 'lightblue',
    color: 'blue',
    fontWeight: 'bold'
  }
  const buttonText = () => 'Click on me!'
  const labelText = 'Enter idea:'

  return (
    <div className="main-div">
      <label>{labelText}</label>
      <input type="text"></input>
      <button type="button" style={{...styles}}>
        {buttonText()}
      </button>
    </div>
  );
}

export default App;
