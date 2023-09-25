import React from 'react';
import Form from '../components/Individual_Form';
import Logo from '../components/Logo';
import '../components/main.css'

function RegisterIndividual() {
  return (
    <div className="App">
      <table style={{ width: '100%' }}>
        <tbody>
          <tr class = "header">
            <td style={{ height: '50pt', textAlign: 'center', width: '90%' }}>Register as Individual</td>
            <td style={{ height: '50pt', textAlign: 'center', width: '10%' }}>
              <button class="button button1">Sign In</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ padding: '10%', paddingTop: 0, width: '10%'}}></td>
            <td style={{ padding: '10%', paddingTop: '10pt', width: '40%'}}>
              <Form />
            </td>
            <td style={{ padding: '10%', paddingTop: 0, width: '40%' }}>
              <Logo />
            </td>
            <td style={{ padding: '10%', paddingTop: 0, width: '10%'}}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RegisterIndividual;
