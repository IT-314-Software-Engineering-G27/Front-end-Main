import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className='register'>
            <div id='top'>
                <button id='btn'>
                    <Link to='/Login'>
                        Sign in
                    </Link>
                </button>
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
                    <button>
                        {/* link to RegAsInd */}
                        <Link to='' className='mainSn'>
                            Sign up
                        </Link>
                    </button>
                </div>
                <div id='org'>

                    <h2 id='OrgTitle'>For organisation</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic obcaecati nostrum perspiciatis dolore excepturi veniam laboriosam
                        dolorum ut saepe ratione rem quia sequi laudantium illo asperiores
                        architecto eum, voluptates dicta.
                    </p>
                    <button>
                        {/* link to RegAsOrg */}
                        <Link to='' className='mainSn'>
                            Sign up
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Register;