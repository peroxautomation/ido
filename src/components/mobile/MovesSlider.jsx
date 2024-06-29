import { useState } from 'react';

/**
 * Moves slider component
 * @param {*} props 
 * @returns 
 */
const MovesSlider = (props) => {
  const { onSlide } = props;
  const [position, setPosition] = useState(0);

  /**
   * Move the slider 
   * @param {*} e 
   */
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const slider = e.target.parentElement;
    const rect = slider.getBoundingClientRect();
    let newPosition = touch.clientX - rect.left;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > rect.width) newPosition = rect.width;
    setPosition(newPosition);
    if (onSlide) onSlide(newPosition / rect.width);
  };

  const handleTouchStart = () => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div
      className={`flex flex-col items-start justify-start relative w-[100%]`}
    >
      <div className="w-full relative box-border h-[0.063rem] z-[0] border-t-[1px] border-solid border-white-40" />
      <div
        className="relative box-border h-[0.063rem] z-[1] border-t-[1px] border-solid border-neutral-100"
        style={{ width: `${position}px` }}
      />
      <div
        className="w-[0.688rem] absolute !m-[0] top-[-0.375rem] rounded-[50%] bg-neutral-100 h-[0.688rem] z-[2]"
        style={{ left: `${position}px` }}
        onTouchStart={handleTouchStart}
      />
    </div>
  );
};

export default MovesSlider;
