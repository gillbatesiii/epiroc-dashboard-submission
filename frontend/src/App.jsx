import {useEffect, useState} from 'react'
import './App.css'
import Tachometer from "./Tachometer.jsx";
import client from "./utils.js";

function App() {
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
