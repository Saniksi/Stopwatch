import { Card } from './Card';
import { calculateTimePart } from '../utils/calculateTimePart';
import {
  SECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from '../utils/constants';

export function FlipCards(props) {
  const { time, isCounting } = props;

  const hours = calculateTimePart(time, MILLISECONDS_IN_HOUR, HOURS_IN_DAY);
  const minutes = calculateTimePart(
    time,
    MILLISECONDS_IN_MINUTE,
    MINUTES_IN_HOUR
  );
  const seconds = calculateTimePart(
    time,
    MILLISECONDS_IN_SECOND,
    SECONDS_IN_MINUTE
  );

  const { tens: tensHours, ones: onesHours } = hours;
  const { tens: tensMinutes, ones: onesMinutes } = minutes;
  const { tens: tensSeconds, ones: onesSeconds } = seconds;

  return (
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
  );
}
