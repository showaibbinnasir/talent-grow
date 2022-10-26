import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftSideNavCourse.css'

const LeftSideNavCourse = ({course}) => {
    const navigate = useNavigate();
    const navigation = (id) =>{
        navigate(`course/${id}`)
    }
    return (
        <div className='items' onClick={()=> navigation(course.course_id)}>
            <h1 className='text-2xl font-semibold'>{course.courseName}</h1>
        </div>
    );
};

export default LeftSideNavCourse;