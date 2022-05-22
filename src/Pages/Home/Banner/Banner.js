import React from 'react';

import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <div class="hero min-h-screen "
            style={{ "background-image": "url('https://img.freepik.com/free-photo/technician-wearing-white-antistatic-gloves-plaid-shirt-sitting-his-desk-using-precision-screwdriver-remove-screws-back-faulty-mobile-phone_343059-487.jpg?size=626&ext=jpg&ga=GA1.2.1602676424.1653190905')" }}
        >
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md text-base-500">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5 text-xl">Facturer is one of the biggest Mobile part manufacturer in the South-Asian Sub-Contintent. Here you can find almost all kind of Mobile parts.</p>
                    <Link to="/parts" class="btn btn-primary">Get Parts</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;