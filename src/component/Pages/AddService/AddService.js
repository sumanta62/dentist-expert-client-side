import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';


const AddService = () => {

    useTitle('Add Service')

    const handlerServiceAdd = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photoUrl = form.photoUrl.value;
        const charge = form.charge.value;
        const reting = form.reting.value;
        const massage = form.massage.value;
        console.log(title, photoUrl, charge, reting, massage);

        const addService = {
            title: title,
            details: massage,
            picture: photoUrl,
            charge: charge,
            reting: reting
        }

        fetch(`https://server-side-eight.vercel.app/services`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addService)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Add Service Seccess', { autoClose: "1000" })
                form.reset();
            });

    }
    return (
        <div className='bg-bule-50 '>
            <section className="p-6 bg-sky-100  py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Add Service</h1>
                <form onSubmit={handlerServiceAdd} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-11/12 md:w-5/6 lg:w-4/6 mt-4">
                    <fieldset className="md:grid grid-cols-12 gap-6 p-6 rounded-md shadow-2xl m-auto">
                        <div className="space-y-2 col-span-4  flex-1">
                            <p className="font-medium text-2xl">Add Service Inormation</p>
                            <p className="text-sm text-justify">The ADD Information Service provides information about the assessment and diagnosis of neurological disorders. Attention Deficit Hyposensitivity Disorder, and inattentive type, are usually associated with significant learning needs. !</p>
                        </div>
                        <div className="col-span-8 mt-5 md:mt-0">
                            <div className='md:flex gap-5'>
                                <div className="">
                                    <label for="firstname" className="text-sm">Service title</label>
                                    <input name="title" type="text" placeholder="Service title" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                                <div className="">
                                    <label for="firstname" className="text-sm">Photo URL</label>
                                    <input name="photoUrl" type="text" placeholder="https://" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                            </div>
                            <div className='md:flex gap-5'>
                                <div className="">
                                <label for="firstname" className="text-sm">Charge   </label>
                                    <input name="charge" type="text" placeholder="$ 0000" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                                <div className="">
                                <label for="firstname" className="text-sm ">Reting  </label>
                                        <input name="reting" type="text" placeholder="0000" className="w-full px-3 py-2 border rounded-md text-black" required />
                                </div>
                            </div>
                            <div >
                                <div className="col-span-full sm:col-span-3">
                                    <label for="bio" className="text-sm">Description</label>
                                    <textarea name="massage" placeholder="Massage" className="w-full px-3 py-2 border rounded-md text-black" required></textarea>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <div className="flex items-center space-x-2">
                                        <button type="submit" className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Add Service</button>
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

export default AddService;