import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
                    <Navbar
        fluid={true}
        rounded={true}
        style = {{backgroundColor: 'rgba(91, 89, 91, 0.73)', padding : '0px 15px', borderRadius: '0px'}}
        >
        <Navbar.Brand>
            <img 
            src="https://img.freepik.com/free-vector/magnifying-glass-man-looking-talent-background_23-2147981198.jpg?w=2000"
            className="mr-3 h-6 rounded-2xl sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-bold text-white dark:text-white">
            TalentGrow
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