import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../component/Navigation/Navigation';
export const courseContext = createContext();

const Default = () => {
    const courses = useLoaderData();
    return (
        <div>
            <courseContext.Provider value={courses}>
                <Navigation></Navigation>
                <Outlet></Outlet>
            </courseContext.Provider>
        </div>
    );
};

export default Default;