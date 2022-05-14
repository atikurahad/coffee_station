import React from 'react';
import Shop from '../Shop';
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1 className="coffee">Welcome To Coffee Station</h1>

      <p className='coffee-benefit'>
        Another study in 126 older adults found that drinking coffee was
        associated with improved physical performance and faster gait speed,
        even after the researchers adjusted for factors like age, belly fat, and
        physical activity levels.
      </p>
     <Shop />

    <div>

    </div>

      {/* <a href="google.com">
        <img
          className="coffee-img"
          src="https://www.worldatlas.com/r/w768/upload/12/f8/83/coffee-cup.jpg"
          alt="coffee"
        >
        </img>
      </a> */}
    </div>
  );
};

export default Home;
