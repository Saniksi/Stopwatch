import { Card } from './Card';

export function FlipCards({ time, isCounting }) {
  const hours = Math.floor(time / (1000 * 60 * 60)) % 24;
  const tensHours = Math.floor(hours / 10);
  const onesHours = hours % 10;

  const minutes = Math.floor(time / (60 * 1000)) % 60;
  const tensMinutes = Math.floor(minutes / 10);
  const onesMinutes = minutes % 10;

  const seconds = Math.floor(time / 1000) % 60;
  const tensSeconds = Math.floor(seconds / 10);
  const onesSeconds = seconds % 10;

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
