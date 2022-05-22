import React from 'react';

const Review = () => {
    return (
        <div className='bg-base-200 py-20'>
            <p className="text-5xl text-center pb-10">review</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                <div className='flex items-center w-96'>
                    <div className="m-2">
                        <div class="avatar">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=40361" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="m-5 ">
                        <p className="text-xl font-bold">Sultan Mahmud</p>
                        <p className="text-xs">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                        
                    </div>
                </div>
                <div className='flex items-center w-96'>
                    <div className="m-2">
                        <div class="avatar">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=40361" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="m-5 ">
                        <p className="text-xl font-bold">Sultan Mahmud</p>
                        <p className="text-xs">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                        
                    </div>
                </div>
                <div className='flex items-center w-96'>
                    <div className="m-2">
                        <div class="avatar">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=40361" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="m-5 ">
                        <p className="text-xl font-bold">Sultan Mahmud</p>
                        <p className="text-xs">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;