import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className='register'>
            <div id='top'>
                <Link to='/login'>
                    <button id='btn'>
                        <div className='txt'>Sign in</div>
                    </button>
                </Link>
            </div>

            <div className='topsn'>
                <h1 id='title'> Sign up</h1>
            </div>
            <div id='maintext'>
                <div id='indi'>
                    <h2>For individual</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic obcaecati nostrum perspiciatis dolore excepturi veniam laboriosam
                        dolorum ut saepe ratione rem quia sequi laudantium illo asperiores
                        architecto eum, voluptates dicta.
                    </p>

                    <Link to='/register/individual'>
                    <button  id='mainSn1'>
                        {/* link to RegAsInd */}
                        <div className='txt'>Sign up</div>
                        </button>
                    </Link>

                </div>
                <div id='org'>

                    <h2>For organisation</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic obcaecati nostrum perspiciatis dolore excepturi veniam laboriosam
                        dolorum ut saepe ratione rem quia sequi laudantium illo asperiores
                        architecto eum, voluptates dicta.
                    </p>

                    
                    <Link to='/register/organization' >
                    <button  id='mainSn2'>
                        {/* link to RegAsInd */}
                        <div className='txt'>Sign up</div>
                        </button>
                    </Link>
                    

                </div>
            </div>
        </div>
    )
}

export default Register;