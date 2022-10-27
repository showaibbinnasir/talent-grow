import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div>
            <div className='flex justify-center'>
                <img className='h-36 rounded-full' src="https://i.pinimg.com/736x/69/7c/f8/697cf8683a9941c2f91c561b2cc806b9.jpg" alt="" />
            </div>
            <h1 className=' mb-5 text-3xl font-semibold'>404 Page not Found</h1>
            <Link className='bg-orange-400 text-white p-4' to='/'>Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;