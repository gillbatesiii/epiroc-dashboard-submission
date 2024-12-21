import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tachometer from "./Tachometer.jsx";
import client from "./utils.js";

function App() {
  const [count, setCount] = useState(0)
    const [rpm, setRpm] = useState(0);

    useEffect(() => {
        client.get('/motor/rpm').then((res) => setRpm(res.data.rpm));
    }, []);
  return (
      <div>
          <input onChange={(e) => setRpm(e.target.value)}/>
          <Tachometer minValue={0} maxValue={800} value={rpm}/>
      </div>
  )
}

export default App
