import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, img, name, description,price}=part
  
    return (
       
             <div className="card w-96 bg-base-200 shadow-xl">
                <figure>
                    <img  className="rounded-lg mt-5" src={img} alt="Display" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p  className='font-bold'>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/purches/${_id}`} className="btn btn-primary">Place Order</Link>
                    </div>
                </div>
            </div>

    );
};

export default Part;