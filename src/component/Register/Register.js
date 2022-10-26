import { GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {loginProvider, createUser, updateUserProfile} = useContext(AuthProvider)
    const googleLoginProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        loginProvider(googleLoginProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(e => console.log(e))
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            handleUpdate(name, photo)
            
        })
        .catch(e => console.log(e))
    }
    const handleUpdate = (name, photoUrl) => {
        const profileInfo = {
            displayName : name,
            photoURL : photoUrl
        }
        updateUserProfile(profileInfo)
        .then(()=> {})
        .catch(e=> console.log(e))
    }
    return (
        <div className='mx-12'>
            <h1 className='text-4xl font-semibold my-5'>Register Page</h1>
            <form onSubmit={handleRegistration} className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email1"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email1"
                type="email"
                name='email'
                placeholder="name@flowbite.com"
                required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                
                <Label
                    htmlFor="name"
                    value="Your name"
                />
                </div>
                <TextInput
                id="name"
                type="text"
                name='name'
                placeholder="enter your name"
                required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                
                <Label
                    htmlFor="photoUrl"
                    value="Photo URL"
                />
                </div>
                <TextInput
                id="photo"
                type="text"
                name='photo'
                placeholder="enter your photo url"
                required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="password1"
                    value="Your password"
                />
                </div>
                <TextInput
                id="password1"
                type="password"
                name='password'
                required={true}
                />
            </div>
            
            <Button type="submit">
                Register
            </Button>
            
            </form>
            <div className='flex justify-center mt-5'>
                <div>
                    <Button onClick={handleGoogleLogin}>Sign in With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;