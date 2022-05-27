import React from 'react';



const About = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold bg-yellow-300 p-4">
        You will know
        <span className="text-3xl text-red-600 font-extralight">About Us</span>
      </h1>
      <div className=" grid grid-cols-2	">
        <div>
          <img
            src="https://i.cdn.newsbytesapp.com/images/l222_26191611543026.jpg"
            alt="coffee"
          ></img>
        </div>
        <div>
          <h1 className='text-6xl text-center font-extrabold text-[red]'> COFFEE STATION</h1>
          <p>
            Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
            Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt
            vix at, vel pertinax sensibus id, error epicurei mea et. Mea
            facilisis urbanitas moderatius id. Vis ei rationibus definiebas, eu
            qui purto zril laoreet. Ex error omnium interpretaris pro, alia
            illum ea vim.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
