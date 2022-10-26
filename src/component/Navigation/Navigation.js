import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='lg:mx-12 md:mx-6 sm:mx-3 mx-0'>
                    <Navbar
        fluid={true}
        rounded={true}
        style = {{backgroundColor: 'lightBlue', padding : '0px 15px', borderRadius: '0px'}}
        >
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='navItem'>
            <NavLink className={(isActive) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
            <NavLink to='/all-courses'>All Courses</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <button>Dark</button>
            <button>Profile</button>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Navigation;