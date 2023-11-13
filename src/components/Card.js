import { useState, useEffect, memo } from 'react';

export const Card = memo(({ number, isCounting }) => {
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [bottomNumber, setBottomNumber] = useState(0);
  const [topNumber, setTopNumber] = useState(0);

  console.log('card');

  useEffect(() => {
    if (isCounting) {
      setIsTop(true);
      setIsBottom(true);
    }

    if (number === 0) {
      setTopNumber(0);
      setBottomNumber(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  const handleOnAnimationEndTop = () => {
    setIsTop(false);
    setTopNumber(number);
  };

  const handleOnAnimationEndBottom = (event) => {
    setBottomNumber(number);
    setIsBottom(false);
  };

  return (
    <>
      <div className="flip-card" data-seconds-tens>
        <div className="top">{number}</div>
        <div className="bottom">{bottomNumber}</div>
        {isTop && (
          <div className="top-flip" onAnimationEnd={handleOnAnimationEndTop}>
            {topNumber}
          </div>
        )}
        {isBottom && (
          <div
            className="bottom-flip"
            onAnimationEnd={handleOnAnimationEndBottom}
          >
            {number}
          </div>
        )}
      </div>
    </>
  );
});
