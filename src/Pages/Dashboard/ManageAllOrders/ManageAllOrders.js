import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';

const ManageAllOrders = () => {
  
    const { data: orders, isLoading } = useQuery(['order'], () => fetch(`https://powerful-caverns-14505.herokuapp.com/order`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
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
                            <th> Name</th>
                            <th>Product Name</th>
                            <th>quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({productName,quantity,address,customerName,phone, status},index)=><tr key={index} className="hover">
                                <th>{index+1}</th>
                                <td>{customerName}</td>
                                <td>{productName}</td>
                                <td>{quantity}</td>
                                <td>{address}</td>
                                <td>{phone}</td>
                                <td  className="text-red-500">{status}</td>
                            </tr>)}

                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;