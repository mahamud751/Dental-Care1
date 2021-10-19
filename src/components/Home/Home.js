import React from 'react';
import Faq from '../Faq/Faq';
import Review from '../Review/Review';
import Service from '../SingleProduct/Service/Service';


import './Home.css'
const Home = () => {
    return (
        <div>
            <Service></Service>
            <Review></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;