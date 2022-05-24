import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
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

    
    const handleSubmit = (event) => {
        event.preventDefault()

        if (event.target.quantity.value > minOrder) {

            const order = {
                productId: _id,
                productName: name,
                quantity: event.target.quantity.value,
                price: price * event.target.quantity.value,
                customerName: user.displayName,
                email: user.email,
                phone: event.target.phone.value
            }
            console.log(order)

        }else{
            toast.error('You cant order under min order quantity')
            event.target.reset()}
        

    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <img src={img} alt="" className="rounded-lg" />
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