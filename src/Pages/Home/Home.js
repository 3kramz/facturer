import React from 'react';
import Banner from './Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Parts from './Parts/Parts';
import Review from './Review/Review';
import BusinessSummary from './BusinessSummary/BusinessSummary';



const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <Review/>
            <BusinessSummary />
            <Footer />
        </div>
    );
};

export default Home;