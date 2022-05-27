import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const Purches = (params) => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [part, setPart] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`).then(res => res.json()).then(data => setPart(data))
    }, [id])

    const { _id, img, name, description, price, stock, minOrder } = part

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()

        if (event.target.quantity.value >= minOrder && event.target.quantity.value <= stock) {

            const order = {
                productId: _id,
                productName: name,
                quantity:parseInt( event.target.quantity.value),
                price: price * parseInt(event.target.quantity.value),
                customerName: user.displayName,
                email: user.email,
                address:event.target.address.value,
                phone: event.target.phone.value,
                status:"unpaid"
            }
            fetch(`http://localhost:5000/order/${_id}`,{
                method:"POST",
                headers:{
                    "content-type":"application/json", 
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(order)
            }).then(res=>res.json())
            .then(data=>{
               if(data.insertedId){
                   toast.success("Order Placed");
                   navigate('/dashboard/my-orders')
               }else{
                toast.error('Something Went wrong')  
               }
            })

        }else{
            toast.error('You can not order under min order quantity or more then stock')
            event.target.reset()}
        

    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <img src={img} alt="" className="rounded-lg w-[400px]" />
                    <p class="py-6">{description}</p>
                    <h1 class="text-xl font-bold">{name}</h1>
                    <p class="py-2">Stock - {stock}<span className="text-sm font-bold">Unit</span></p>
                    <p class="py-2">Minimum Order - {minOrder}<span className="text-sm font-bold">Unit</span></p>
                    <p class="py-2">Price per Unit - {price}<span className="text-sm font-bold">Unit</span></p>

                </div>
                <div class="card flex-shrink-0 w-full max-w-sm ">
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name="name" value={user?.displayName || ''} placeholder="Your Name" className="input input-bordered w-full max-w-xs" readOnly />

                        <input type="email" name="email" value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" readOnly />

                        <input type="number" name="quantity" placeholder={`Min Order Quantity ${minOrder}`} className="input input-bordered w-full max-w-xs" />


                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="Place Order" className="btn btn-primary text-white w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purches;