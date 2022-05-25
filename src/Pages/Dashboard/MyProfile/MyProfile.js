import React, { useState } from 'react';
import UpdateProfile from './UpdateProfile'

const MyProfile = () => {
    const[update,setUpdate]=useState(null)

    const handleBtn = () => {
        setUpdate(true)
        console.log("agh")
    }
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center ">

            <div class="grid grid-cols-1 justify-items-center m-10 shadow  p-10 rounded-lg">
                <div>
                    <div class=" avatar online">
                        <div class="w-48 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=28212" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class=" font-bold text-2xl">Sultan Mahmud Ekram </h2>
                    <p class=" text-xl italic">smahmud1098@gmail.com </p>
                </div>
            </div>

            <div class="flex justify-center items-center">

                <div class="">
                    <h2 class="text-xl my-5"><span class="font-semibold">  Education :</span> Undergraduate </h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  Location :</span> Ashuganj, Brahmanbaria </h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  Phone :</span> 017000000  </h2>
                    <h2 class="text-xl my-5"><span class="font-semibold">  LinkedIn  :</span> www.linkedin.com  </h2>

                    <label

                        onClick={() => handleBtn()}
                        className="btn btn-primary text-white 
                          modal-button w-full max-w-xs"

                        htmlFor="Appointment-modal"
                    >Book Now
                    </label>
                </div>
            </div>
            {update && <UpdateProfile setUpdate={setUpdate}/>}
        </div>
    );
};

export default MyProfile;