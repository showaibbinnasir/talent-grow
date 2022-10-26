
import React from 'react';


const Course = ({course}) => {
    
    return (
        <div className='bg-slate-400 rounded-xl'>
            <div className='flex justify-center items-center m-5 gap-5'>
                <img className='h-24' src={course.thumbnail} alt="" />
                <div className='text-white'>
                    <h1 className='text-xl font-semibold text-white'>{course.courseName}</h1>
                    <h1>Instructor : </h1>
                    
                        <div className='flex justify-center'>
                            <img className='h-8 rounded-2xl' src={course.instructorImage} alt="" />
                        </div>
                        <h1>{course.instructor}</h1>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Course;