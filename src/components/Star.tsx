import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

interface StarProps {
  num: number;
}

const Star: React.FC<StarProps> = ({ num }) => {
  const stars: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    if (i < num) {
      stars.push(<i key={`star-${i}`} className='fa fa-star' style={{color: "yellow"}}></i>);
    } else {
      stars.push(<i key={`star-${i}`} className='fa fa-star'></i>);
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default Star;
