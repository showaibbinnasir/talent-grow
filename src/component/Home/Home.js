import { Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css'
const Home = () => {
    const navigate = useNavigate();
    const courses = useLoaderData();
    console.log(courses);
    const handleButton = () => {
        navigate('/all-courses')
    }
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold'>Welcome to the <br /> <span className='text-6xl text-orange-500'>TalentGrow</span></h1>
            <h1>Where you can find your dream and learn about your dream.</h1>
            <div className='bannerPart'>
                <div>
                    <h1 className='text-white lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-semibold'>Dream Bigger, Think Bigger</h1>
                    <h1 className='text-white text-xl font-semibold mt-3'>Lets change the world together.</h1>
                    <div className='flex justify-center mt-3'>
                        <Button onClick={handleButton} className='bg-orange-500'>Our Courses</Button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-semibold mt-3 mb-5'>Courses</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-12'>
                    {
                        courses.map(course=> <Course key={course.course_id} course={course}></Course>)
                    }
                </div>
                <div className='flex justify-center mt-3'>
                 <Button onClick={handleButton} className='bg-orange-500'>See Our All Courses</Button>
            </div>
            </div>
        </div>
    );
};

export default Home;