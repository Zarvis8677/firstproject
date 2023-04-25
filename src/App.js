
import './App.css';
import { useEffect, useState, React } from 'react';
function App() {

  const [count, setCount] = useState(0); 

    useEffect(() => {
        setInterval(() => {
        setCount(count + 1);
        }, 1000)
    },);

  return (
    <div className="App">
      <h1>The Count is: </h1>
      <h2>{count}</h2>
      </div>
  )
}
      
export default App;
