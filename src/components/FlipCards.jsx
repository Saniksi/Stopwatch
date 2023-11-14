import { Card } from './Card';

export function FlipCards({ time }) {
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
          <Card number={tensHours} />
          <Card number={onesHours} />
        </div>
        <span className="card__title">Hours</span>
      </div>
      <div className="card">
        <div className="card__segment">
          <Card number={tensMinutes} />
          <Card number={onesMinutes} />
        </div>
        <span className="card__title">Minutes</span>
      </div>
      <div className="card">
        <div className="card__segment">
          <Card number={tensSeconds} />
          <Card number={onesSeconds} />
        </div>
        <span className="card__title">Seconds</span>
      </div>
    </div>
  );
}
