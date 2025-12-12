import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [divState, setDivState] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] =useState(0);

  return (
    <div className='app-grid'>
        <Header setLevel={setLevel} score={score} divState={divState}/>

        <CardGrid level={level} setScore={setScore} setDivState={setDivState} />
    </div>
  )
}

export default App
