import React from 'react';
import OrganizationForm from '../components/OrganizationForm';
import Logo from '../components/Logo';
import '../components/main.css'
import { Link } from 'react-router-dom';

function RegisterOrganization() {
    return (
        <div className="App">
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr class="header">
                        <td style={{ height: '50pt', textAlign: 'center', width: '90%' }}>Register as Organization</td>
                        <td style={{ height: '50pt', textAlign: 'center', width: '10%' }}>
                            <button class="button button1">
                                <Link to='/login'>
                                    Sign in
                                </Link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '10%', paddingTop: 0, width: '10%' }}></td>
                        <td style={{ padding: '10%', paddingTop: '10pt', width: '40%' }}>
                            <OrganizationForm />
                        </td>
                        <td style={{ padding: '10%', paddingTop: 0, width: '40%' }}>
                            <Logo />
                        </td>
                        <td style={{ padding: '10%', paddingTop: 0, width: '10%' }}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RegisterOrganization;
