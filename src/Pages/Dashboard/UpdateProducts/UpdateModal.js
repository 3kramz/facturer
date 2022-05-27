import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';


const UpdateModal = ({ setUpdate, refetch, id }) => {


    const { data: part, isLoading } = useQuery(`partsById=${id}`, () => fetch(`https://powerful-caverns-14505.herokuapp.com/part/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const { stock } = part

    const updatePrice = e => {
        e.preventDefault()
        const UpdatedPrice = {
            price: parseInt(e.target.price.value)
        }


        fetch(`https://powerful-caverns-14505.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json', 
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(UpdatedPrice)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount || data.upsertedCount) {
                    setUpdate(null)
                    refetch()
                    toast.success("Update Successfully")
                } else {
                    setUpdate(null)
                    toast.error("Failed to Update")
                }
            })
    }



    const updateStock = e => {
        e.preventDefault()

        const UpdatedStock = {
            stock: parseInt(e.target.stock.value) + parseInt(stock) 
        }


        fetch(`https://powerful-caverns-14505.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json', 
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(UpdatedStock)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount || data.upsertedCount) {
                    setUpdate(null)
                    refetch()
                    toast.success("Update Successfully")
                } else {
                    setUpdate(null)
                    toast.error("Failed to Update")
                }
            })
    }

    return (

        <div>
            <input type="checkbox" id="product-modal"  className="modal-toggle" />
            <div  className="modal modal-bottom sm:modal-middle">
                <div  className="modal-box">
                    <label htmlFor="product-modal"  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3  className="font-bold text-2xl text-center text-secondary">Update part</h3>

                    <form onSubmit={updateStock}  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="number" name="stock" placeholder="Stock"  className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="update stock"  className="btn btn-primary text-white w-full max-w-xs" />

                    </form>

                    <form onSubmit={updatePrice}  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="number" name="price" placeholder="Price"  className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="update Price"  className="btn btn-primary text-white w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateModal;