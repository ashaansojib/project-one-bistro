import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;