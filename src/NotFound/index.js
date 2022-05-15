import React from 'react';
import { Link } from 'react-daisyui';
import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <img src='https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png' alt='error'></img>
     {/* <Link path='/home'>Back To Home</Link> */}
     <Link href='/home'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
