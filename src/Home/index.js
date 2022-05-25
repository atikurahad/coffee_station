import React from 'react';
import Shop from '../Shop';
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1 className="text-red-400 m-5  text-center font-extrabold text-4xl ">Welcome To Coffee Station</h1>

      <p className="m-5 p-4 bg-[#EAE7DE] text-stone-900 text-2xl font-black border-2 ">
        Coffee processing refers to the way that a seed is removed from a coffee
        cherry. Like any other pitted fruit, coffee cherries have a seed, the
        pulp, the mucilage around the seed, and a protective skin. There are
        various methods to remove the seed from that cherry, and these methods
        affect the seed's flavor as it gets roasted and turned into a coffee
        bean—this flavor sticks around till the final brew.
      </p>
      <Shop />

      <div></div>

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
