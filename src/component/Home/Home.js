import React from 'react';
import Banner from '../Banner/Banner';
import OurCompany from '../OurCompany/OurCompany';
import Products from '../Products/Products';
import UpComingModel from '../UpComingModel/UpComingModel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurCompany></OurCompany>
            <UpComingModel></UpComingModel>
        </div>
    );
};

export default Home;