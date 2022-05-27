import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/home/order`)
            .then(res => res.json())
            .then(data => {
                data.reverse()
                data.length = 3
                setReview(data)

            })
    }, [])

    return (
        <div className='bg-base-200 py-20'>
            <p className="text-5xl text-center pb-10">review</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                {reviews.map(review => <div key={review._id} className='flex items-center w-96'>
                    <div className="m-2">
                        <div class="avatar">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=40361" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="m-5 ">
                        <p className="text-xl font-bold">{review.customerName}</p>
                        <p className="text-xs">{review.review}.</p>

                    </div>

                </div>)}
            </div>


        </div>
    );
};

export default Review;