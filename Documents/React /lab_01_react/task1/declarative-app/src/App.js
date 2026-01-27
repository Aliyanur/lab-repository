import {useState} from 'react';
import './App.css';

// Main app component
function App(){
  // State to track if the paragraph is highlighted
  const[isHighlighted,  setIsHighlighted]=useState(false);

  // Function to toggle the highlight state
  const toggleHighlight=()=>{
    // Flip the current value of isHighlighted
    setIsHighlighted(!isHighlighted);
  };

  return(
    <div>
      <h2>Declarative (React) Highlight Toggle</h2>
      <button onClick={toggleHighlight}>Toggle Highlight</button>
      <p className={isHighlighted? 'highlight':""}>This paragraph will be highlighted when u click the button</p>
    </div>
  );
}

export default App;