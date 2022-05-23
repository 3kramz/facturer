import React from 'react';
import { useParams } from 'react-router-dom';

const Purches = (params) => {
    const { id } = useParams()



    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Display</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et Link id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm ">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Unit</span>
                            </label>
                            <input type="number" placeholder="unit" class="input input-bordered" />
                        </div>
                       
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purches;