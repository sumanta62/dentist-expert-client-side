import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    const { user} = useContext(AuthContext);
    const userReview = useLoaderData();
    const [reviews, setReview] = useState(userReview);
    console.log(reviews);

    useTitle('Update');

    const handlerStatusUpdaye = () => {
        fetch(`https://server-side-eight.vercel.app/update/${userReview?._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    
                    toast.success('Updated Seccess', { autoClose: "1000" })
                }
            })
    }


    const handlerInputChange = e =>{
        e.preventDefault();
        const value = e.target.value;
        const field = e.target.name;
        const newUser = {...reviews};
        newUser[field] = value;
        setReview(newUser);
     
    }
    // console.log(handlerInputChange)
   
    return (
        <div>
            <section className="p-6  bg-gray-800 text-white">
                <h1 className='text-center text-white text-4xl font-bold'>Update Data</h1>
                <form onSubmit={handlerStatusUpdaye} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Your name</label>
                                <input onChange={handlerInputChange} defaultValue={userReview.name} name="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Your Email</label>
                                <input  defaultValue={user?.email} name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md text-black" required readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Photo Url</label>
                                <input onChange={handlerInputChange} defaultValue={userReview.picture} name="photoUrl" type="text" placeholder="https://" className="w-full px-3 py-2 border rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Rating</label>
                                <input onChange={handlerInputChange}  defaultValue={userReview.reting} name="reting" type="text" placeholder="0000" className="w-full px-3 py-2 border rounded-md text-black" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Description</label>
                                <textarea onChange={handlerInputChange}  defaultValue={userReview.details} name="massage" placeholder="Massage" className="w-full px-3 py-2 border rounded-md text-black" ></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Update User</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Update;