import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../Spinner/Spinner';
import Servise from './Servise';


const AllCategary = () => {
    const [services, setServices] = useState([]);
    useTitle('AllService')
    const { loding } = useContext(AuthContext)

    useEffect(() =>{
        fetch(`https://server-side-eight.vercel.app/allServices`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])

    if(loding){
        return <Spinner></Spinner>
    }


    return (
        <div className='p-5  bg-blue-200'>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-4'> All Services </h1>
            <p className='text-center mb-7'>Dental service means a diagnostic, preventive, or corrective procedure <br /> furnished by or under the supervision of a dentist.</p>
            <div className=' w-11/12 mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service=> <Servise key={service._id}  service={service}></Servise>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCategary;