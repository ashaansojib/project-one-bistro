import React from 'react';
import Banner from './Banner';
import OnlineOrder from './OnlineOrder';
import ChefInfo from './ChefInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <ChefInfo></ChefInfo>
        </div>
    );
};

export default Home;