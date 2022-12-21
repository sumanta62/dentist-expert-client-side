import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllMyReview from './AllMyReview';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Spinner from '../../Spinner/Spinner';


const MyReviue = () => {
    const { user, loding } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    useTitle('myReviue');

    

    useEffect(() => {
        fetch(`https://server-side-eight.vercel.app/review?email=${user?.email}`, {
           
        })
            .then(res => res.json())
            .then(data => {

                setReview(data)
            })
    }, [user?.email]);

       
if(loding){
    return <Spinner></Spinner>
}

    const handlerDelete = id => {
        const proseed = window.confirm('Are you sure , you went to cancel this .order');
        if (proseed) {
            fetch(`https://server-side-eight.vercel.app/review/${id}`, {
                method: 'DELETE',
               
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete successfully')
                        const remaining = reviews.filter(ord => ord._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }


    return (

        <div className="bg-blue-200">
            <div className=" overflow-x-auto  container py-10 m-auto bg-blackk">
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">My Revious</h1>
                <p className='text-center text-sm pb-4'>From here you can delete and update your review items as desired.</p>
                {
                    reviews.length > 0 ?

                        <Table className="table w-full bg-blue-50 rounded-lg">
                            <Thead>
                                <Tr>
                                    <Th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </Th>
                                    <Th>Name</Th>
                                    <Th>Reviue Title</Th>
                                    <Th>Rating</Th>
                                    <Th>Update</Th>
                                    <Th>Delete</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    reviews.map(review => <AllMyReview
                                        key={review._id}
                                        reviue={review}
                                        handlerDelete={handlerDelete}
                                       
                                    > </AllMyReview>)
                                }

                            </Tbody>

                        </Table>
                        :
                        <div className='text-center font-bold pb-4'>
                            <p className="px-6 text-2xl mt-8 dark:text-gray-400">No Reviue data!
                                <h1 className='text-3xl'>Please Reviue Add.
                                    <Link rel="noopener noreferrer" to='/' className="underline dark:text-violet-400 font-bold text-amber-600"> Reviue</Link>
                                </h1>
                            </p>
                        </div>
                }
            </div>

        </div>
    );
};

export default MyReviue;