import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
  const [isToggold,setIsToggoled] = useState(false)

const handleToggol=()=>{
  setIsToggoled((prev)=>!prev)
}
  return (
    <div className="App">
      <header className="App-header">
      {isToggold?<Counter/>:<Timer/>}
      {/* <Counter/> */}
      {/* <Timer/> */}

      <button onClick={handleToggol}>{isToggold?'Toggol to Timer App':'Toggol to Counter App'}</button>
      </header>
    </div>
  );
}

export default App;
