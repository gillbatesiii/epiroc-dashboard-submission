import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tachometer from "./Tachometer.jsx";

function App() {
  const [count, setCount] = useState(0)
    const [rpm, setRpm] = useState(0);
  return (
      <div>
          <input onChange={(e) => setRpm(e.target.value)}/>
          <Tachometer minValue={0} maxValue={800} value={rpm}/>
      </div>
  )
}

export default App
