import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../component/Navigation/Navigation';

const Default = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;