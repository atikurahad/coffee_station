import React from 'react';
import { Button } from 'react-daisyui';



const About = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold bg-yellow-300 p-4">
        You will know
        <span className="text-3xl text-red-600 font-extralight">About Us</span>
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
            {" "}
            COFFEE STATION
          </h1>
          <p className="font-thin  text-[#ae1db5] font-mono m-5">
            Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
            Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt
            vix at, vel pertinax sensibus id, error epicurei mea et. Mea
            facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu
            qui purto zril laoreet. Ex error omnium interpretaris pro, alia
            illum ea vim.
          </p>
          <Button className='text-center flex flex-auto bg-[purple] p-5'>BUY A COFFEE</Button>
        </div>
      </div>
    </>
  );
};

export default About;
