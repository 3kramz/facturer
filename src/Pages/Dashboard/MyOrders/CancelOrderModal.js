import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ refetch, id ,setAction}) => {
const handleCancel=()=>{
    setAction(null)
    fetch(`https://powerful-caverns-14505.herokuapp.com/order/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`

        },
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount === 1) {
                toast.success(`Order Cancelled`)
                refetch()
            }
            else { toast.error(`Failed tocancell order`); }

        })

}
    return (
        <>

            <input type="checkbox" id="cancelOrderModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="cancelOrderModal"  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p className="py-4"> Are you want to sure cancel order?</p>
                    <button onClick={handleCancel} className="btn btn-xs">Confirm</button>
                </div>
            </div>

        </>

    );
};

export default CancelOrderModal;