import { useRef, useState } from 'react';
import './App.css';
import Direction from './components/Direction';

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const originRef = useRef("");
  const destinationRef = useRef("");

  const handleDirection = e => {
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }

  return (
    <div className='App'>
      <form onSubmit={handleDirection}><br />
        <input type="text" ref={originRef} placeholder="Starting from" id="" /> <br /> <br />
        <input type="text" ref={destinationRef} placeholder="Destination" id="" /> <br /> <br />
        <input type="submit" value="Get Direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
