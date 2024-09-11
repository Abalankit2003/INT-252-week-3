import { useState } from 'react'
import './App.css'
import React from 'react'
import Count from './Components/Count';
import Table from './Components/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count />
      <Table />
    </>
  );
}

export default App
