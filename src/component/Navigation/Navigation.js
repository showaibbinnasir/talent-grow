import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext/AuthContext';
import './Navigation.css'

const Navigation = () => {
    const {user, logOut} = useContext(AuthProvider)
    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.error(error))
      }
      console.log(user)
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
            <div className='flex justify-center items-center'>
                {
                    user?.uid ?
                    <div className='flex items-center gap-3'>
                        <h1>{user?.displayName}</h1>
                        <button className='bg-red-500 p-3 text-white' onClick={handleLogOut}>Logout</button>
                    </div> :
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                }
            </div>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Navigation;