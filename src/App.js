import { useEffect, useState } from 'react';

import Controls from './components/Controls';
import Dial from './components/Dial';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  function handleStart() {
    setIsCounting(true);
  }

  function handlePause() {
    setIsCounting(false);
  }

  function handleReset() {
    setTime(0);
    setIsCounting(false);
  }

  function handlePause_2(event) {
    const start = Date.now();

    if (event.detail === 1) {
      console.log('start = ' + start);
    }

    if (!isCounting) {
      setIsCounting(true);
    }

    // setTimeout(() => {
    //   if (event.detail === 2) {
    //     setIsCounting(false);
    //   }
    // }, 300);

    if (event.detail === 2) {
      const end = Date.now();
      const res = end - start;

      console.log('end = ' + end);
      console.log(`end - start = ${res}`); // Чому тут результат завжди 0 ?

      setTimeout(() => {
        setIsCounting(false);
      }, res || 300);
    }
  }

  function startAndReset() {
    setIsCounting(true);
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <Dial time={time} />
      <Controls
        isCounting={isCounting}
        time={time}
        startStopwatch={handleStart}
        pauseStopwatch={handlePause}
        resetStopwatch={handleReset}
        pauseStopwatch_2={handlePause_2}
        startAndReset={startAndReset}
      />
    </div>
  );
}

export default App;
