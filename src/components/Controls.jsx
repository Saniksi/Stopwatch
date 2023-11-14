export function Controls(props) {
  const { startStopwatch, pauseStopwatch, resetStopwatch, isCounting, time } =
    props;

  return (
    <div className="controls">
      <button onClick={pauseStopwatch} disabled={isCounting ? false : true}>
        Pause
      </button>
      <button onClick={startStopwatch} disabled={isCounting ? true : false}>
        Start
      </button>
      <button onClick={resetStopwatch} disabled={time > 0 ? false : true}>
        Reset
      </button>
    </div>
  );
}
