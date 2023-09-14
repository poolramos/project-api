import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card';
import useFetch from './services/useFetch';

function App() {
  const data = useFetch("");

  return (
  <main>
  {data?.results.map((element, i) => (
    <Card key={i} url={element.url}/>
    ))}
    </main>
  );
}

export default App
