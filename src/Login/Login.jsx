import React from 'react';
import './Login.css';
import Phone from './Phone.png';
import document from './document.png';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [regi, setRegi] = useState('Individual');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const handleEventChange = (evnt) => {
        setRegi(evnt.target.value);
    }

    return (
        <div class='log'>
            <div id='nav'>

                <div id='leftnav'>
                    <Link to=''>
                        <img src={document} alt="legal section" id='legal' />
                    </Link>
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
                                <input type="radio" name='regi' value='Individual' onChange={handleEventChange} />
                                Individual
                            </label>
                        </div>

                        <div id='radio2'>
                            <label>
                                <input type="radio" name='regi' value='Organisation' onChange={handleEventChange} />
                                Organisation
                            </label>
                        </div>
                    </div>


                    <div>
                        <p className='adjust'>
                            Email or phone number
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
                            handleSubmit(user, regi).then((data) => {
                                console.log(data);
                            });
                        }}>
                            Sign in
                        </button>

                    </div>

                    <div id='footer'>

                        <div id='remember'>
                            <label>
                                <input type='checkbox' value='Remember me' />
                                Remember me
                            </label>
                        </div>

                        <div id='help'>
                            <Link to=''>
                                Need help?
                            </Link>
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

async function handleSubmit(user, regi) {
    try {
        const response = await fetch('http://localhost:8000/login/', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            })
        });
        const data = await response.json();
        return data;
    }
    catch (e) {
        return e;
    }
}

export default Login;