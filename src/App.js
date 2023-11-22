import React from 'react'
import './App.css';
import Hero from './components/Heroo/Hero';
import Program from './components/Programs/Program';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';



function App() {
  return (
    <div className='App'>
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      

    </div>
  )
}

export default App