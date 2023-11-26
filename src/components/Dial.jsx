import {
  SECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from '../utils/constants';

export function Dial(props) {
  const { time } = props;

  return (
    <div className="dial">
      <div className="dial__segment">
        {('0' + Math.floor((time / MILLISECONDS_IN_HOUR) % HOURS_IN_DAY)).slice(
          -2
        )}
        <sub className="dial__segment-description">Hr</sub>
      </div>
      <div className="dial__segment">
        {(
          '0' + Math.floor((time / MILLISECONDS_IN_MINUTE) % MINUTES_IN_HOUR)
        ).slice(-2)}
        <sub className="dial__segment-description">Min</sub>
      </div>
      <div className="dial__segment">
        {(
          '0' + Math.floor((time / MILLISECONDS_IN_SECOND) % SECONDS_IN_MINUTE)
        ).slice(-2)}
        <sub className="dial__segment-description">Sec</sub>
      </div>
      <div className="dial__segment">
        {('0' + Math.floor((time / 10) % 100)).slice(-2)}
        <sub className="dial__segment-description">Ms</sub>
      </div>
    </div>
  );
}
