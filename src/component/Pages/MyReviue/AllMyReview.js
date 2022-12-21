import React from 'react';
import {IoStarHalf } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import {  Tr, Th, Td } from 'react-super-responsive-table';

const AllMyReview = ({ reviue, handlerDelete}) => {
    useTitle('allReviue');

    return (
        <Tr>
            <Th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </Th>
            <Td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={reviue?.picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviue?.name}</div>
                        <div className="text-sm opacity-50">{reviue?.email}</div>
                    </div>
                </div>
            </Td>
            <Td>
                <h3 className='text-lg font-bold'>{reviue?.title}</h3> 
                <span className=" badge-sm">{reviue?.details}</span>
            </Td>
            
            <Td> <div className='flex items-center gap-2 text-amber-500 font-bold'><IoStarHalf></IoStarHalf>   {reviue?.reting}</div></Td>
            <Td>
            <Link to={`/update/${reviue?._id}`}>
                    <button  className="btn btn-ghost btn-xs">Update</button>
                    </Link>
            </Td>
            <Td>
                <button onClick={()=>handlerDelete(reviue?._id)} className="btn btn-ghost btn-xs">Delete</button>
            </Td>
        </Tr>
    );
};

export default AllMyReview;