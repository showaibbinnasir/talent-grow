import { Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const RightSideDet = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    
    console.log(data)
    return (
        <div className='mt-5'>
           <div className='flex justify-center'>
                <img className='h-48' src={data.thumbnail} alt="" />
           </div>
           <h1 className='text-4xl font-semibold mt-3'>{data.courseName}</h1>
           <h1 className='text-2xl font-semibold my-3'>Course Content</h1>
           <ul>
                {
                    data.courseOutlet.map(x=> <li>{x}</li>)
                }
           </ul>
           <h1 className='text-2xl font-semibold my-5'>Instructor</h1>
           <div className='flex justify-center'>
                <img className='h-20' src={data.instructorImage} alt="" />
           </div>
           <h1>Name : {data.instructor}</h1>
           <div className='flex justify-center my-5'>
                <Button>Get Access</Button>
           </div>
        </div>
    );
};

export default RightSideDet;