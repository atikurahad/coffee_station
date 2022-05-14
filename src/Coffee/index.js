import React from 'react';
import './Coffee.css'
import { Button } from 'react-daisyui';

const Coffee = ({coffee})=> {
  const {name,img,price,ratings,details}= coffee;
  return (
    <>
      {/* <Card>
        <Card.Image className='card-height'
          src={img}
          alt="Shoes"
        />
        <Card.Body>
          <Card.Title tag="h2">{name}</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Card.Actions className="justify-end">
            <Button color="primary">{price}</Button>
          </Card.Actions>
        </Card.Body>
      </Card> */}

      <div className="coffee-menu ">
        <h2> {name}</h2>
        <img src={img} alt="coffee"></img>
        <span>{details}</span>
        <h3 className="my-2 text-center font-extrabold text-2xl">
          Rating: {ratings} *
        </h3>
        {/* <h1 className="my-2">{details}</h1> */}
        <Button className="btn bg-red-500  text-black  my-2 rounded-lg text-center  font-bold w-100">
          <p className="p-2">Price ${price}</p>
        </Button>
      </div>
    </>
  );
};

export default Coffee;
