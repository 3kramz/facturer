import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import auth from '../../../Firebase.init';
import CancelOrderModal from './CancelOrderModal';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const { data: orders, isLoading ,refetch} = useQuery(['order'], () => fetch(`https://powerful-caverns-14505.herokuapp.com/order/${user.email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    const [action, setAction] = useState(null)
    const [id, setId] = useState('')



    if (isLoading) { return <Loading /> }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({productId, productName, quantity, status }, index) => <tr 
                        key={index}
                        className="hover">
                            <th>{index + 1}</th>
                            <td>{productName}</td>
                            <td>{quantity}</td>
                            <td>{status === "unpaid" ? <button className="btn btn-sm">Pay</button> : "paid"}</td>
                            <td>{status === "unpaid" ? 
                            <label htmlFor="cancelOrderModal" onClick={()=>{
                                setAction(true);
                                setId(productId)

                            }} className="btn btn-sm modal-button">Cancel</label>
                                : "paid"}</td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
            {action&& <CancelOrderModal refetch={refetch} id={id} setAction={setAction}/>}
        </div>
    );
};

export default MyOrder;