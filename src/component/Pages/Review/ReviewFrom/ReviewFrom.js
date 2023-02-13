import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewItem from './ReviewItem';

const ReviewFrom = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title } = service;
    console.log(service);
    useTitle('reviue-From');


    const handlerReviewItem = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const reting = form.reting.value;
        const massage = form.massage.value;

        form.reset();
        toast.success('Reviue Item added Seccess', { autoClose: "1000" });

        const addReview = {
            review_id: _id,
            title: title,
            name: name,
            email: email,
            details: massage,
            picture: photoUrl,
            reting: reting

        }

        fetch(`https://server-side-eight.vercel.app/review `, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addReview)

        })
            .then(res => res.json())
            .then(data => {
                // loding(true)
                console.log(data)
            });

    }

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl md:text-4xl font-bold'>All Review Items</h1>
                <p className='text-center text-sm pt-2'>You can see all reviewed items here</p>
            </div>
            <div className="p-2 md:p-6 my-6 rounded-lg ">
                <ReviewItem></ReviewItem>

            </div>
            <section className="p-2 md:p-6 my-6 rounded-l">
                <h1 className="text-center text-4xl font-bold">Review Added</h1>
                <p className='text-center text-sm pt-2'>You can add some items as needed and update and delete them later.</p>
                <form onSubmit={handlerReviewItem} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-11/12 md:w-4/6 mt-4">
                    <fieldset className="md:grid grid-cols-12 gap-6 p-6 rounded-md shadow-2xl m-auto">
                        <div className="space-y-2 col-span-4  flex-1">
                            <p className="font-medium text-1xl md:text-2xl">Add review Inormation</p>
                            <p className="text-sm text-justify">The ADD Information Service provides information about the assessment and diagnosis of neurological disorders. Attention Deficit Hyposensitivity Disorder, and inattentive type, are usually associated with significant learning needs. !</p>
                        </div>
                        <div className="col-span-8 mt-5 md:mt-0">
                            <div className='md:flex gap-5'>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="firstname" className="text-sm">Your name</label>
                                    <input name="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md text-black" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="email" className="text-sm">Your Email</label>
                                    <input defaultValue={user?.email} name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md text-black" required readOnly />
                                </div>
                            </div>
                            <div className="md:flex gap-5">
                                <div className="col-span-full sm:col-span-3">
                                    <label for="website" className="text-sm">Photo Url</label>
                                    <input name="photoUrl" type="text" placeholder="https://" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="reting" className="text-sm">Rating</label>
                                    <input name="reting" type="text" placeholder="0000" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                            </div>
                            <div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="bio" className="text-sm">Description</label>
                                    <textarea name="massage" placeholder="Massage" className="w-full px-3 py-2 border rounded-md text-black" required></textarea>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <div className="flex items-center space-x-2">
                                        <button type="submit" className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring">Add Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default ReviewFrom;