import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Coffees from './Coffees';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, details, photo, category, test } = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div className="flex justify-between items-center p-3 bg-red-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Coffee Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>{supplier}</p>
                <p>{test}</p>
            </div>
            <div className="flex flex-col space-y-4">
                <button className="btn btn-sm btn-info">View</button>
                <Link to={`/updateCoffee/${_id}`}><button className="btn btn-sm btn-success">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
            </div>
        </div>
    );
};

export default Coffee;
