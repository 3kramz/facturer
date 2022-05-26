import React from 'react';
import { toast } from 'react-toastify';


const ReviewModal = ({setReview, refetch ,id }) => {
    
   
    const handleSubmit = e => {
        e.preventDefault()
        const review = {
          review:e.target.review.value
        }
console.log(id, review)
        fetch(`http://localhost:5000/review/${id}`,{
            method:'PUT',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.modifiedCount||data.upsertedCount){
                setReview(null)
                refetch()
                toast.success("Reviewed Successfully")
            }else{
                setReview(null)
                toast.error("Failed to Review")
            }
        })
    }

    return (

        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-center text-secondary">Give Your valuable review</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <textarea type="text" name="review" placeholder="Review.." className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="post Review" className="btn btn-primary text-white w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default ReviewModal;