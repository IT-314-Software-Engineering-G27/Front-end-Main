import React, { useEffect } from 'react';
import './Login.css';
import Phone from './Phone.png';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/session';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [type, setType] = useState('Individual');
    const auth = useAuth();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.session?.user) {
            navigate('/profile');
        }
    }, [auth?.session?.user]);

    return (
        <div className='log'>
            <div id='nav'>

                <div id='leftnav'>

                    <Link to=''>
                        <img src={Phone} alt="contact us" id='contact' />
                    </Link>
                </div>

                <div id='rightnav'>
                    <button id='snup'>
                        <Link to='/register'>
                            Sign up
                        </Link>
                    </button>
                </div>
            </div>
            <div id='bdy'>
                <div id='form'>
                    <h1>Sign in</h1>
                    <div id='check'>
                        <div id='radio1'>
                            <label>
                                <input type="radio" name='regi' value='Individual' onChange={(e) => setType(e.target.value)} checked />
                                Individual
                            </label>
                        </div>
                        <div id='radio2'>
                            <label>
                                <input type="radio" name='regi' value='Organization' onChange={(e) => setType(e.target.value)} />
                                Organisation
                            </label>
                        </div>
                    </div>


                    <div>
                        <p className='adjust'>
                            Email
                        </p>
                        <input type='text' className='inbox' id='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div>
                        <p className='adjust'>
                            Password
                        </p>
                        <div>
                            <input type='password' className='inbox' id='pswd' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </div>
                    </div>

                    <div id='snBtn'>

                        <button id='signInbtn' onClick={(e) => {
                            e.preventDefault();
                            auth.login({ email: user.email, password: user.password });
                        }}>
                            Sign in
                        </button>

                    </div>
                    <Typography variant="h5" color="info" align="center"> {auth.isLoading && "Loading..."} </Typography>
                    <Typography variant="h5" color="error" align="center"> {auth.error} </Typography>
                    <div id='footer'>

                        <div id='remember'>
                            <label>
                                <input type='checkbox' value='Remember me' />
                                Remember me
                            </label>
                        </div>

                        <div id='help'>
                            <Link to='/contact-us'>Need help?</Link>
                        </div>
                    </div>

                    <div id='lastLine'>
                        Don't have an account?

                        <Link to="/register">
                            Sign up
                        </Link>

                    </div>
                </div>
                <div id='lg'>
                    <img src={Logo} alt="startApp logo" id='SAlogo' />
                </div>

            </div>
        </div>
    )
}

export default Login;