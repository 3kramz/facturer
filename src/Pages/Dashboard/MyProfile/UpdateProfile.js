import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';

const AppoinmentModal = ({setUpdate, refetch }) => {

    const [user] = useAuthState(auth);



    const handleSubmit = e => {
        e.preventDefault()
        const update = {
            email: user.email,
            education: e.target.education.value,
            phone: e.target.phone.value,
            location: e.target.location.value,
            linkedIn: e.target.linkedIn.value
        }

        fetch(`http://localhost:5000/user/${user.email}`,{
            method:'PUT',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.result){
                setUpdate(null)
                refetch()
                toast.success("Update Successfully")
            }else{
                setUpdate(null)
                toast.error("Failed to update")
            }

        })




    }

    return (

        <div>
            <input type="checkbox" id="Appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-center text-secondary">Update Your Profile</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        
                        <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="location"  placeholder="Location" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" name="linkedIn" placeholder="LinkedIn Profile Link " className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value="Update Profile" className="btn btn-primary text-white w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>

    );
};

export default AppoinmentModal;