import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 mt-12'>
            <div className='bg-orange-400 text-white p-3 mb-3' >
                <h1 className='text-3xl font-semibold'>What is cors?</h1>
                <h1>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</h1>
            </div> 
            <div className='bg-orange-400 text-white p-3 mb-3' >
                <h1 className='text-3xl font-semibold'>Why are you using firebase? What other Option do you have implement for auth?</h1>
                <h1>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                I have used : 
                <ul>
                    <li>Google Login</li>
                    <li>Github Login</li>
                    <li>Email and Password login</li>
                </ul>
                </h1>
            </div> 
            <div className='bg-orange-400 text-white p-3 mb-3' >
                <h1 className='text-3xl font-semibold'>How does private router works?</h1>
                <h1>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h1>
            </div> 
            <div className='bg-orange-400 text-white p-3' >
                <h1 className='text-3xl font-semibold'>What is node? How does it works?</h1>
                <h1>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients.
                Node js basically works on two concept : 
                <ul>
                    <li>Asyncronize</li>
                    <li>Non-blocking i/o</li>
                </ul>
                </h1>
            </div> 
        </div>
    );
};

export default Blog;    