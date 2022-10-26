import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    return (
        <div className='flex justify-center mt-5'>
            <div className='bg-slate-400 text-white p-5 rounded-2xl'>
                <h1 className='text-5xl font-semibold my-5'>Check Out</h1>
                <h1 className='text-2xl font-semibold'>{data.courseName}</h1>
                <h1 className='text-md font-semibold'>Duration : {data.duration}</h1>
            </div>
        </div>
    );
};

export default CheckOut;