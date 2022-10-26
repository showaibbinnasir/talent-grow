import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideDet from '../RightSideDet/RightSideDet';
import './Courses.css'

const Courses = () => {
    
    
    return (
        <div className='conatiner'>
            <LeftSideNav></LeftSideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;