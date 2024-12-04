import React from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const chef = form.chef.value
        const test = form.test.value
        const category = form.category.value
        const supplier = form.supplier.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, chef, supplier, details, photo, category, test }
        console.log(newCoffee)

        // send the data to the backend
        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <div>
            <div className='mb-10'>
                <Navbar></Navbar>
            </div>
            <div className='font-bold text-2xl text-center py-4'>Add Coffee</div>
            <form onSubmit={handleForm} className='flex flex-col justify-center items-center w-3/5 mx-auto bg-red-100 p-10'>
                <div className='flex w-full justify-center gap-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Chef</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Chef Name"
                                name="chef"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className='flex w-full justify-center gap-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Supplier"
                                name="supplier"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Test</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Test"
                                name="test"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className='flex w-full justify-center gap-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Category"
                                name="category"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='label-group'>
                            <input
                                type="text"
                                placeholder="Details"
                                name="details"
                                className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Photo URL</span>
                    </label>
                    <label className='label-group'>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered w-full lg:w-[450px] " />
                    </label>
                </div>
                <br />
                <input
                    type='submit' className='btn w-full lg:w-[450px] hover:bg-orange-900 bg-orange-800 text-white' value='Add Coffee' />
            </form>
        </div>
    );
};

export default AddCoffee;