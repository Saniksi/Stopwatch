import { useCallback, useEffect, useState } from 'react';

import Controls from './components/Controls';
import Dial from './components/Dial';
import { Card } from './components/Card';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;
  const tensHours = Math.floor(hours / 10);
  const onesHours = hours % 10;

  const minutes = Math.floor(time / (60 * 1000)) % 60;
  const tensMinutes = Math.floor(minutes / 10);
  const onesMinutes = minutes % 10;

  const seconds = Math.floor(time / 1000) % 60;
  const tensSeconds = Math.floor(seconds / 10);
  const onesSeconds = seconds % 10;

  // console.log('app re-render');

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
        <div className="cards">
          <div className="card">
            <div className="card__segment">
              <Card number={tensHours} isCounting={isCounting} />
              <Card number={onesHours} isCounting={isCounting} />
            </div>
            <span className="card__title">Hours</span>
          </div>
          <div className="card">
            <div className="card__segment">
              <Card number={tensMinutes} isCounting={isCounting} />
              <Card number={onesMinutes} isCounting={isCounting} />
            </div>
            <span className="card__title">Minutes</span>
          </div>
          <div className="card">
            <div className="card__segment">
              <Card number={tensSeconds} isCounting={isCounting} />
              <Card number={onesSeconds} isCounting={isCounting} />
            </div>
            <span className="card__title">Seconds</span>
          </div>
        </div>
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
