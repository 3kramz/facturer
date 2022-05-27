import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../../../Components/Loading'
import { useQuery } from 'react-query';

const MyProfile = () => {
    const [update, setUpdate] = useState(null)

    const [user] = useAuthState(auth);
    const { email, displayName, photoURL } = user
    const img = photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWLjkYKGswBE2f9mynFkd8oPT1W4Gx8RpDQ&usqp=CAU"


    const { data: profile, isLoading, refetch } = useQuery(['profile'], () => fetch(`http://localhost:5000/user/${email}`,{
        method:"GET",
        headers:{
            "content-type":"application/json" , 
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) { return <Loading /> }



    const { education, phone, location, linkedIn } = profile

    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center ">

            <div class="grid grid-cols-1 justify-items-center m-10 shadow  p-10 rounded-lg">
                <div>
                    <div class=" avatar online">
                        <div class="w-48 rounded-full">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class=" font-bold text-2xl">{displayName}</h2>
                    <p class=" text-xl italic">{email} </p>
                </div>
            </div>

            <div class="flex justify-center items-center">

                <div class="">
                    <h2 class="text-xl my-5"><span class="font-semibold">  Education :</span> {education}</h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  Location :</span>{location}</h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  Phone :</span> {phone}  </h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  LinkedIn  :</span> {linkedIn}  </h2>
                    <label
                        onClick={() => setUpdate(true)}
                        className="btn btn-primary text-white 
                          modal-button w-full max-w-xs"

                        htmlFor="Appointment-modal"
                    >update Profile
                    </label>
                </div>
            </div>
            {update && <UpdateProfile setUpdate={setUpdate} refetch={refetch} />}
        </div>
    );
};

export default MyProfile;