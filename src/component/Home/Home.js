import { Button } from 'flowbite-react';
import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold'>Welcome to the <br /> <span className='text-6xl text-orange-500'>TalentGrow</span></h1>
            <h1>Where you can find your dream and learn about your dream.</h1>
            <div className='bannerPart'>
                <div>
                <h1 className='text-white lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-semibold'>Dream Bigger, Think Bigger</h1>
                <h1 className='text-white text-xl font-semibold mt-3'>Lets change the world together.</h1>
                <div className='flex justify-center mt-3'>
                <Button className='bg-orange-500'>Our Courses</Button>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Home;