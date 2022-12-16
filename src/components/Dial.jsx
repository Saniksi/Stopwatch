function Dial(props) {
  const { time } = props;
  return (
    <>
      <span>
        {('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}:
      </span>
      <span>{('0' + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}:</span>

      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>

      <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
    </>
  );
}

export default Dial;
