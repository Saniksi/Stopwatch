import { memo } from 'react';

function Controls(props) {
  const { startStopwatch, pauseStopwatch, resetStopwatch, isCounting, time } =
    props;

  console.log('controls re-render');

  return (
    <div className="controls">
      <button onClick={pauseStopwatch} disabled={isCounting ? false : true}>
        Pause
      </button>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={resetStopwatch} disabled={time > 0 ? false : true}>
        Reset
      </button>
    </div>
  );
}

export default memo(Controls);
