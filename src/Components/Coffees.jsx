import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';
import Navbar from './Navbar';

const Coffees = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div> 
            <Navbar></Navbar>
            <h1 className='text-2xl text-center font-bold text-orange-800 my-4'>Available Coffee : {coffees.length} </h1>
            <div className='grid grid-cols-2 w-10/12 mx-auto gap-5'>
                {
                    coffees.map(coffee => <Coffee 
                        key={coffee._id} 
                        coffees={coffees} 
                        setCoffees={setCoffees} 
                        coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Coffees;