import React from 'react';
import {useState} from 'react';
import './main.css'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [college, setCollege] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
  };

  const handleCollege = (e) => {
    setCollege(e.target.value);
    setSubmitted(false);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    setSubmitted(false);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  };

  const handleQualification = (e) => {
    setQualification(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
        setError(true);
    } else {
        setSubmitted(true);
        setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
            display: submitted ? '' : 'none',
        }}>
        <p>User {name} successfully registered.</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
            display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields.</p>
      </div>
    );
  };

  return (
    <form>
      <table className="form">
        <tbody>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleName} type="text" id="name" placeholder="Full Name" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleEmail} type="text" id="email" placeholder="Email" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleUsername} type="text" id="username" placeholder="Username" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handlePassword} type="password" id="password" placeholder="Password" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input type="password" id="confirm-password" placeholder="Confirm Password" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleNumber} type="text" id="phone-number" placeholder="Phone Number" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleCollege} type="text" id="college" placeholder="College" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleCountry} type="text" id="country" placeholder="Country" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleAge} type="text" id="age" placeholder="Age" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px' }}>
              <input onChange={handleQualification} type="qualification" id="qualification" placeholder="Highest Qualification" />
            </td>
          </tr>
          <tr>
            <td style={{ paddingBottom: '10px', textAlign: 'center' }}>
              <input onChange={handleSubmit} type="submit" id="submit" value="Submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;
