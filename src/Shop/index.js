import React, { useEffect, useState } from 'react';
import './Shop.css'
import Coffee from '../Coffee';

const Shop = () => {
  const [coffees,setCoffees]= useState([])
  useEffect(()=>{
    fetch('coffee_store.json')
    .then(res=> res.json())
    .then(data=> setCoffees(data))
  },[])
  return (
    <div className='coffee-container'>
     {
       coffees.map( coffee => <Coffee key={coffee.id} coffee={coffee}></Coffee>)
     }
    </div>
  );
};

export default Shop;
