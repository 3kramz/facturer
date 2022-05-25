import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import auth from '../../../Firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const { data: orders, isLoading } = useQuery(['order'], () => fetch(`http://localhost:5000/order/${user.email}`)
        .then(res => res.json()))

    if (isLoading) { return <Loading /> }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({productName,quantity, status},index)=><tr class="hover">
                                <th>{index+1}</th>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{status==="unpaid" ? <button class="btn btn-sm">Pay</button>: "paid"}</td>
                            </tr>)}

                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;