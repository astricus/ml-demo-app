import { MouseEventHandler } from 'react';
import './fun.css';

const Fun = ({ goBack }: { goBack: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <div className='fun-container' onClick={goBack}>
      <div className='fun-image' />
      <div className='fun-animation' />
    </div>
  );
};

export default Fun;
