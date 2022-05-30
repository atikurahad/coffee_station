import React from 'react';
import { Button } from 'react-daisyui';



const About = () => {
  return (
    <>
      <h1 className="text-3xl m-5  text-center font-bold bg-yellow-300 p-4">
        You will know <br></br>
        <span className="text-5xl text-red-600 font-bold">About Us</span>
      </h1>
      <div className=" grid grid-cols-2	">
        <div className="bg-[#C7A17A]">
          <img
            src="https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/preeti-jaiswani20180127013509185.jpeg"
            alt="coffee"
          ></img>
        </div>
        <div className="bg-[#EAE7DE] ">
          <h1 className="text-6xl mt-5 text-center font-extrabold text-[#ba7878]  textShadow">
            COFFEE STATION
          </h1>
          <p className="font-thin  text-[#ae1db5] font-mono m-5">
            A coffee table book, also known as a cocktail table book, is an
            oversized, usually hard-covered book whose purpose is for display on
            a table intended for use in an area in which one entertains guests
            and from which it can serve to inspire conversation or pass the
            time.
          </p>
          <Button className="text-center flex flex-auto bg-[purple] p-5">
            BUY A COFFEE
          </Button>
        </div>
      </div>
    </>
  );
};

export default About;
