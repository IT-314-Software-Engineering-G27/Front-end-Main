import React, { useEffect, useState } from 'react';
import './main.css'
import { useNavigate } from 'react-router';
import { Button, TextField } from '@mui/material';
import { API_URL } from '../config';

function Form() {
    const [organization, setOrganization] = useState({
        user: {
            username: '',
            email: '',
            password: '',
            phone_number: '',
        },
        company_name: '',
        CEOname: '',
        description: '',
        headquarter_location: '',
        year_of_establishment: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setError((error) => (error));
    }, [organization, confirmPassword]);

    return (
        <form>
            <table className="form">
                <tbody>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="name" placeholder="Company's Legal Name" onChange={(e) => setOrganization({ ...organization, company_name: e.target.value })} value={organization.company_name} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="email" placeholder="Company's Email" onChange={(e) => setOrganization({ ...organization, user: { ...organization.user, email: e.target.value } })} value={organization.user.email} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="username" placeholder="Username" onChange={(e) => setOrganization({ ...organization, user: { ...organization.user, username: e.target.value } })} value={organization.user.username} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="password" id="password" placeholder="Password" onChange={(e) => setOrganization({ ...organization, user: { ...organization.user, password: e.target.value } })} value={organization.user.password} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="password" id="confirm-password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="headquarter" placeholder="Headquarter's Location" onChange={(e) => setOrganization({ ...organization, headquarter_location: e.target.value })} value={organization.headquarter_location} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="CEO" placeholder="Name of CEO" onChange={(e) => setOrganization({ ...organization, CEOname: e.target.value })} value={organization.CEOname} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="number" placeholder="Phone Number" onChange={(e) => setOrganization({ ...organization, user: { ...organization.user, phone_number: e.target.value } })} value={organization.user.phone_number} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <input type="text" id="year" placeholder="Year of Establishment" onChange={(e) => setOrganization({ ...organization, year_of_establishment: e.target.value })} value={organization.year_of_establishment} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px' }}>
                            <TextField id="outlined-multiline-static" label="Description" multiline rows={4} onChange={(e) => setOrganization({ ...organization, description: organization.description })} value={organization.description} focused sx={{ width: "100%" }} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingBottom: '10px', textAlign: 'center' }}>
                            <Button variant="contained" color="primary" onClick={(e) => {
                                e.preventDefault(); submitForm({ organization }).then((value) => {
                                    if (value) navigate('/login');
                                })
                            }} disabled={!!error.length} type="submit">Submit</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

async function submitForm({ individual }) {
    const response = await fetch(`${API_URL}/individuals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ individual }),
    });
    const data = await response.json();
    return response.ok;
}

export default Form;
