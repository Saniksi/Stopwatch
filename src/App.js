import { useCallback, useEffect, useState } from 'react';

import { Controls } from './components/Controls';
import { Dial } from './components/Dial';
import { FlipCards } from './components/FlipCards';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime((previousTime) => previousTime + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const startStopwatch = useCallback(() => {
    setIsCounting(true);
  }, []);

  const pauseStopwatch = useCallback(() => {
    setIsCounting(false);
  }, []);

  const resetStopwatch = useCallback(() => {
    setTime(0);
    setIsCounting(false);
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Stopwatch</h1>
      <div className="inner">
        <Dial isCounting={isCounting} time={time} />
        <FlipCards time={time} />
      </div>
      <Controls
        time={time}
        isCounting={isCounting}
        startStopwatch={startStopwatch}
        pauseStopwatch={pauseStopwatch}
        resetStopwatch={resetStopwatch}
      />
    </div>
  );
}

export default App;
