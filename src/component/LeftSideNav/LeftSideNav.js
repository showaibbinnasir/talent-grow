import React from 'react';
import { useContext } from 'react';
import { courseContext } from '../../layout/Default';
import LeftSideNavCourse from '../LeftSideNavCourse/LeftSideNavCourse';

const LeftSideNav = () => {
    const data = useContext(courseContext)
    return (
        <div className='bg-slate-300 sticky top-0 h-[100vh]' >
            {
                data.map(x=> <LeftSideNavCourse key={x.courseId} course={x} ></LeftSideNavCourse>)
            }
        </div>
    );
};

export default LeftSideNav;