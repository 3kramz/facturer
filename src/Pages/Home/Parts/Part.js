import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {img, name, description,price}=part
    console.log(img, name, description,price)
    return (
       
             <div class="card w-96 bg-base-200 shadow-xl">
                <figure>
                    <img  class="rounded-lg mt-5" src={img} alt="Display" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price : {price}</p>
                    <div class="card-actions justify-end">
                        <Link to="/purches" class="btn btn-primary">Place Order</Link>
                    </div>
                </div>
            </div>

    );
};

export default Part;