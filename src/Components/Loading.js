import React from 'react';
import CircleLoader	 from 'react-spinners/CircleLoader'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <CircleLoader size={80}/>
        </div>
    );
};

export default Loading;