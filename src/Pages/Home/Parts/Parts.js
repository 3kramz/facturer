import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Part from './Part';

const Parts = () => {

const [parts, setParts]=useState([])
useEffect(()=>{
    fetch("https://powerful-caverns-14505.herokuapp.com/home/parts").then(res=>res.json()).then(data=>setParts(data))
},[])

    return (
        <div className='w-full'>
        <h3  className="text-4xl text-center mt-20 mb-10">Our top parts</h3>
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center ">
           {parts.map((part)=><Part key={part._id} part={part}/>)}
        </div>
        <Link to='/parts' className="btn btn-wide btn-primary  flex btn-outline  m-10 ">See All</Link>
    </div >
    );
};

export default Parts;