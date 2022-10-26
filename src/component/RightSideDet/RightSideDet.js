import { Button } from 'flowbite-react';
import React from 'react';
import { useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './RightSideDet.css'


const RightSideDet = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content : () => componentRef.current,
        documentTitle : 'emp-data',
        onAfterPrint : ()=> alert('print success')
    })
    const data = useLoaderData();
    const navigate = useNavigate();
    const navigation = (id) => {
        navigate(`/checkout/${id}`)
    }
    console.log(data)
    return (
        <>
            <div ref={componentRef} style={{width : '100%', height: window.innerHeight}} className='mt-5'>
            <div className='flex justify-center'>
                    <img className='h-48' src={data.thumbnail} alt="" />
            </div>
            <div className='flex md:flex-col sm:flex-col lg:flex-row flex-col justify-center items-center gap-5'>
                    <h1 className='text-4xl font-semibold mt-3'>{data.courseName}</h1>
                    <Button onClick={handlePrint}>Download PDF</Button>
            </div>
            <h1 className='text-2xl font-semibold my-3'>Course Content</h1>
            <ul>
                    {
                        data.courseOutlet.map(x=> <li>{x}</li>)
                    }
            </ul>
            <h1 className='text-2xl font-semibold my-5'>Instructor</h1>
            <div className='flex justify-center'>
                    <img className='h-20 rounded-full' src={data.instructorImage} alt="" />
            </div>
            <h1>Name : {data.instructor}</h1>
            <div className='flex justify-center my-5'>
                    <Button onClick={()=> navigation(data.course_id)}>Get Access</Button>
                    
            </div>
            </div>
            
        </>
    );
};

export default RightSideDet;