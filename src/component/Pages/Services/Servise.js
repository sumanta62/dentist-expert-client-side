import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const Servise = ({ service }) => {
    const { picture, details, title, _id } = service;
    useTitle('service')

    return (
        <div>
            <div className="card bg-blue-50 shadow-xl transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring cursor-pointer">
                <PhotoProvider>
                    <PhotoView src={picture}>
                <figure><img className='w-full h-52' src={picture} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body pt-2">
                    <h2 className="card-title font-bold gap-0">
                        {title}
                    </h2>
                    <p className='text-sm'>{details?.slice(0, 110) + ' ....'}</p>
                    <div className="card-actions justify-between items-center mt-4 font-bold">
                        <div >
                        Charge: ${service?.charge} 
                        </div>
                        <Link to={`/details/${_id}`}>
                            <button className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servise;