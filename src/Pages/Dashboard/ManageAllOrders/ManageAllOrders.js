import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const ManageAllOrders = () => {
  
    const { data: orders, isLoading } = useQuery(['order'], () => fetch(`http://localhost:5000/order`)
        .then(res => res.json()))

    if (isLoading) { return <Loading /> }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> Name</th>
                            <th>Product Name</th>
                            <th>quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({productName,quantity,address,customerName,phone, status},index)=><tr class="hover">
                                <th>{index+1}</th>
                                <td>{customerName}</td>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{address}</td>
                                <td>{phone}</td>
                                <td className="text-red-500">{status}</td>
                            </tr>)}

                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;