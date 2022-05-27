import React, { useEffect } from 'react';
import auth from '../../Firebase.init';
import Loading from '../../Components/Loading'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/UseToken';


const Login = () => {


    
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
 
    const [ token ] = useToken(user || gUser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
   

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => signInWithEmailAndPassword(data.email, data.password);

    if (loading || gLoading) { return <Loading /> }

    let signInError;
    if (error || gError) {
        signInError = <p  className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }


   
    return (
        <div className="hero min-h-screen bg-base-200 justify-items-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div  className="form-control w-full max-w-xs">
                                <label  className="label">
                                    <span  className="label-text">Email</span>
                                </label>

                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }

                                    })}
                                    type="text"
                                    placeholder="email"
                                     className="input input-bordered w-full max-w-xs"
                                />

                                <label  className="label">
                                    {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div  className="form-control w-full max-w-xs">
                                <label  className="label">
                                    <span  className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                     className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label  className="label">
                                    {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input  className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                        </form>
                        <p><small>New to Facturer ? <Link  className='text-primary' to="/signup">Create Account </Link></small></p>
                        <div  className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                             className="btn btn-outline">
                            Connect With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;