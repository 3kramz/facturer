import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import UpdateModal from './UpdateModal';

const UpdateProducts = () => {

    const [update, setUpdate] = useState(null)
    const [id, setId] = useState("")

    const { data: parts, isLoading, refetch } = useQuery(['order'], () => fetch(`https://powerful-caverns-14505.herokuapp.com/parts`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <p  className="text-5xl">Update products</p>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Stock</th>
                            <th>price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {parts.map(({ _id, name, stock, price }, index) => <tr key={index} className={_id}>
                            <th>{index}</th>
                            <td>{name}</td>
                            <td>{stock}</td>
                            <td>{price}</td>
                            <td> <label
                                onClick={() => {
                                    setUpdate(true)
                                    setId(_id)

                                    refetch()
                                }}
                                 className="btn btn-primary text-white 
                                     modal-button w-full max-w-xs"

                                htmlFor="product-modal"
                            >Update
                            </label></td>
                        </tr>

                        )}

                    </tbody>
                </table>
            </div>
            {update && <UpdateModal setUpdate={setUpdate} refetch={refetch} id={id} />}
        </div>
    );
};

export default UpdateProducts;