import React, { useContext, useEffect, useState } from 'react';
import ReviueItemShow from './ReviueItemShow';
import { Table, Thead, Tr, Th } from 'react-super-responsive-table';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Spinner from '../../../Spinner/Spinner';

const ReviewItem = () => {
    const [shoWReviue, setShowReviue] = useState([]);
   
const {loding} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://server-side-eight.vercel.app/review`)

            .then(res => res.json())
            .then(data => {
                setShowReviue(data);
            })
    }, [])

    
if(loding){
    return <Spinner></Spinner>
}


    return (
        <div>
            <div className="overflow-x-auto w-full text-black">
                <Table className="table w-full table-fixed">

                    <Thead>
                        <Tr>
                           
                            <Th>Name</Th>
                            <Th className="text-end">Rating</Th>
                           
                        </Tr>
                    </Thead>
                    <tbody>
                        {
                            shoWReviue?.map(show => 
                                <ReviueItemShow 
                                key={show._id} 
                                showReviue={show}>
                                </ReviueItemShow>)
                        }

                    </tbody>

                </Table>
            </div>
        </div>
    );
};

export default ReviewItem;