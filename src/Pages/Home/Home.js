import React from 'react';
import Banner from './Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Parts from './Parts/Parts';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;