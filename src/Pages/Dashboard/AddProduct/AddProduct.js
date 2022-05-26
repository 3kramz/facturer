import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddPart = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgbbApiKey = "387367a4542662ccb6675641fad9bea6"

    const onSubmit = async data => {
        const part = { ...data }
        const formData = new FormData();
        const image = data.image[0]
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbApiKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    part.img = result.data.url

                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',

                        },
                        body: JSON.stringify(part),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success(`New Part is Added`)
                                reset()
                            }
                            else { toast.error(`Failed to Add new Part`); reset() }

                        })
                }

            })

    }


    return (
        <div className="border-t-4 border-primary">
            <h2 className="text-2xl text-center">Add a New Part</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className="mx-auto w-full max-w-md">

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Part Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Part Name"
                        className="input input-bordered w-full max-w-md"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Part name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>



                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Part Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Part description"
                        className="input input-bordered w-full max-w-md"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Part Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>



                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Part price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Part price"
                        className="input input-bordered w-full max-w-md"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Part price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Part stock</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Part stock"
                        className="input input-bordered w-full max-w-md"
                        {...register("stock", {
                            required: {
                                value: true,
                                message: 'Part stock is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Part Minimum Order</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Part Minimum Order"
                        className="input input-bordered w-full max-w-md"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'Part Minimum order is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-md"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-md text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddPart;