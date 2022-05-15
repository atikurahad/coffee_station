import React from 'react';
import './Coffee.css'
import { Button } from 'react-daisyui';

const Coffee = ({coffee})=> {
const favoriteIcon = (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

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

        <div className="flex gap-x-2 ml-2">
          <Button startIcon={favoriteIcon}> Add to favourite</Button>
          <Button className="bg-primary">
            {" "}
            <p>price ${price}</p>
          </Button>
        </div>

        {/* <Button className="btn bg-red-500  text-black  my-2 rounded-lg text-center  font-bold w-100">
          <p className="p-2">Price ${price}</p>
        </Button> */}
      </div>
    </>
  );
};

export default Coffee;
