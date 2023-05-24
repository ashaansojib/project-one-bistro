import React from 'react';
import Banner from './Banner';
import OnlineOrder from './OnlineOrder';
import ChefInfo from './ChefInfo';
import Featured from './Featured';
import About from './About';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <ChefInfo></ChefInfo>
            <Featured></Featured>
            <About></About>
        </>
    );
};

export default Home;