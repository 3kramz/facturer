import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import auth from '../../../Firebase.init';
import ReviewModal from './ReviewModal';

const AddAReview = () => {
    const [review, setReview] = useState(null)
    const [id, setId] = useState("")
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery(['order'], () => fetch(`https://powerful-caverns-14505.herokuapp.com/order/${user.email}`,{
        method:"GET",
        headers:{
            "content-type":"application/json", 
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) { return <Loading /> }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Review</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({ productName, review, status, productId }, index) => <tr 
                        key={index}
                        className="hover">
                            <th>{index + 1}</th>
                            <td>{productName}</td>
                            <td>{review}</td>
                            <td>{status !== "unpaid" ? <button className="btn btn-sm">Pay</button> : <label
                                onClick={() => {
                                    setReview(true)
                                    setId(productId)
                                    refetch()
                                }}
                                 className="btn btn-primary text-white 
                                     modal-button w-full max-w-xs"

                                htmlFor="product-modal"
                            >Add review
                            </label>}</td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
            {review && <ReviewModal setReview={setReview} refetch={refetch} id={id} />}
        </div>
    );
};

export default AddAReview;