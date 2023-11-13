import { memo } from 'react';

function Dial(props) {
  const { time } = props;

  console.log('dial re-render');

  return (
    <div className="dial">
      <div className="dial__segment">
        {('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
        <sub className="dial__segment-description">Hr</sub>
      </div>
      <div className="dial__segment">
        {('0' + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}
        <sub className="dial__segment-description">Min</sub>
      </div>
      <div className="dial__segment">
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        <sub className="dial__segment-description">Sec</sub>
      </div>
      <div className="dial__segment">
        {('0' + Math.floor((time / 10) % 100)).slice(-2)}
        <sub className="dial__segment-description">Ms</sub>
      </div>
    </div>
  );
}

export default memo(Dial);
