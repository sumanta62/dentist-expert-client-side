import React from 'react';
import { toast } from 'react-toastify';
import apporment from '../../../images/appoinment-img.jpg'

const BookApporment = () => {
    const handlerServiceAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const address = form.address.value;
        const bio = form.bio.value;

        const booking = {
           name,
           email,
           phone,
           date,
           address,
           bio
        }

        fetch(` https://server-side-eight.vercel.appappormentBook`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking Apporment', { autoClose: "1000" })
                form.reset();
            });

    }

    return (
        <div className='md:grid grid-cols-2 p-5 '>
            <div className='hidden md:flex '>
                <img src={apporment} alt="" />
            </div>
            <div>
                <form onSubmit={handlerServiceAdd} action="" method="POST" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-full h-full">
                    <div className="grid gap-6 p-7 bg-blue-50 shadow-lg">
                        <h1 className="text-3xl md:text-4xl font-bold">Book an <br /> Appoinment</h1>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm"> Name</label>
                                <input id="name" name='name' type="text" placeholder="Your name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" name='email' type="email" placeholder="Email" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="phone" className="text-sm">Phone</label>
                                <input id="phone" name='phone' type="text" placeholder="Phone" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="date" className="text-sm">Date</label>
                                <input id="date" name='date' type="date" placeholder="v" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input id="address" name='address' type="text" placeholder="" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Description</label>
                                <textarea id="bio" name='bio' placeholder="" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="submit" className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookApporment;