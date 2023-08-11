import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [start, setStart] = useState(10);
  const [bar, setBar] = useState(0);
  useEffect(() => {
    if (start > 0)
      setTimeout(async () => {
        await setStart(start - 1);
        setBar(11 - start);
      }, 1000);
  }, [start]);


  return (
    <div className="App">
      <div>{start}</div>
      <progress width="100%" value={bar} max={10}></progress>
    </div>
  );
}

export default App;
