import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Spinner/Spinner';
import Servise from './Servise';

const Services = () => {
    const [services, setServices] = useState([]);
    const { loding } = useContext(AuthContext);

    useEffect(() =>{
        fetch(`https://server-side-eight.vercel.app/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
            
        })
    }, [])

    if(loding){
        return <Spinner></Spinner>
    }


    return (
        <div className='p-5  bg-blue-50'>
            <h1 className='text-center text-3xl md:text-4xl font-bold py-4'> Our Services </h1>
            <p className='text-center text-sm mb-7'>Dental service means a diagnostic, preventive, or corrective procedure <br /> furnished by or under the supervision of a dentist.</p>
            <div className=' w-11/12 mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service=> <Servise key={service._id}  service={service}></Servise>)
                    }
                </div>
            </div>
            <div className='text-center my-5'>
            <Link to='/allService'>
            <button className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">See All Mode</button>
            </Link>
            </div>
        </div>
    );
};

export default Services;