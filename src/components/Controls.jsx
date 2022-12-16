function Controls(props) {
  const {
    startStopwatch,
    pauseStopwatch,
    resetStopwatch,
    pauseStopwatch_2,
    startAndReset,
    isCounting,
    time,
  } = props;

  return (
    <>
      <div>
        {isCounting ? <button onClick={pauseStopwatch}>Pause</button> : null}
        <button onClick={startStopwatch}>Start</button>
        {time !== 0 ? <button onClick={resetStopwatch}>Reset</button> : null}
      </div>
      <div>
        <h2>Task from Vova</h2>{' '}
        <button onClick={(event) => pauseStopwatch_2(event)}>||</button>
        <button onClick={startAndReset}>{'>'}</button>
        <button onClick={resetStopwatch}>{'[]'}</button>
      </div>
    </>
  );
}

export default Controls;
