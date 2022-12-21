import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {  IoStarHalf, IoStarOutline } from "react-icons/io5";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewFrom from '../Review/ReviewFrom/ReviewFrom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../Spinner/Spinner';


const ServiceDetails = () => {
    useTitle('Service-Details')
    const service = useLoaderData();
    const { user, loding } = useContext(AuthContext);

    if(loding){
        return <Spinner></Spinner>
    }

    return (
        <div className='pt-5 pb-2 px-5 bg-blue-100'>
            <div>
                <h1 className='text-center text-3xl md:text-4xl font-bold my-4'>Services Details</h1>
                <p className='text-center mb-7'>Dental service means a diagnostic, preventive, or corrective procedure <br /> furnished by or under the supervision of a dentist.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 m-auto w-full md:w-3/3 lg:w-4/6 p-6 bg-blue-50 space-y-6 overflow-hidden rounded-lg shadow-md ">

                    <div className='cursor-zoom-in'>
                        <PhotoProvider>
                            <PhotoView src={service?.picture}>
                                <img src={service?.picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className=" mx-3">
                        <div className="">
                            <h2 className="mb-1 text-xl font-bold">{service?.title}</h2>
                            <p className="text-sm dark:text-gray-400 ">{service?.details}</p>

                        </div>
                        <div className='flex flex-wrap justify-between mt-5'>
                            <div aria-label="Share this post" type="button" className=" text-center font-bold">
                                Charge: ${service?.charge}
                            </div>
                            <div className="flex text-sm dark:text-gray-400">

                                <div type="button" className="flex items-center p-1 space-x-1.5 text-amber-500 text-xl font-bold">
                                    <IoStarOutline></IoStarOutline>
                                    <IoStarHalf></IoStarHalf>
                                   
                                    <span>{service?.reting}</span>
                                </div>
                            </div>
                        </div>
                    <Link to='/allService'>
                        <button className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Back Page</button>
                    </Link>
                    </div>
                </div>
            </div>
            {/* //////////////////////// add review section ////////////////////////////////*/}
            <div className="p-6 my-6 rounded-lg bg-sky-100" >
                {
                    user?.uid ?
                        <ReviewFrom></ReviewFrom>
                        :

                        <div className='text-center font-bold pb-4'>
                            <p className="px-6 text-1xl mt-5 dark:text-gray-400">Don't have an account yet?
                                <h1 className='text-3xl'>Please Login!

                                    <Link rel="noopener noreferrer" to='/login' className="underline dark:text-violet-400 font-bold"> Login</Link>.
                                </h1>
                            </p>
                        </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;