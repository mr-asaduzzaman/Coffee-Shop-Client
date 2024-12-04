import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log(id)
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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining)
                        }

                    })



            }
        });



    }
    return (
        <div className='bg-red-50 min-h-screen'>
            <Navbar></Navbar>


            <div className="overflow-x-auto">
                <table className="table w-11/12 mx-auto border my-10">
                    {/* head */}
                    <thead>
                        <tr className='font-bold'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created Time</th>
                            <th>Last Login Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} className='border-b hover:bg-red-100'>

                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdDate}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className='flex gap-3'>
                                    <button className='btn btn-circle bg-blue-500 btn-sm text-white'><FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(user._id)} className='btn btn-circle bg-red-600 btn-sm text-white'><MdDeleteForever /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;