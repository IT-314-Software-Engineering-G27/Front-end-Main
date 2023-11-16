import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import './main.css'
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

function Form() {
  const [individual, setIndividual] = useState({
    first_name: '',
    last_name: '',
    user: {
      username: '',
      email: '',
      password: '',
      phone_number: '',
    },
    college: '',
    country: '',
    age: 20,
    skills: [],
    bio: '',
    degree: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (individual.user.password !== confirmPassword) {
      setError(["Passwords don't match"]);
    }
    else {
      setError([]);
    }
  }, [individual, confirmPassword]);

  return (
    <>
      <form className="form">
        <table className="form">
          <tbody>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={3} onChange={(e) => setIndividual({ ...individual, first_name: e.target.value })} type="text" id="name" placeholder="First Name" value={individual.first_name} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={3} onChange={(e) => setIndividual({ ...individual, last_name: e.target.value })} type="text" id="name" placeholder="Last Name" value={individual.last_name} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={3} onChange={(e) => setIndividual({ ...individual, user: { ...individual.user, email: e.target.value } })} type="text" id="email" placeholder="Email" value={individual.user.email} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={3} onChange={(e) => setIndividual({ ...individual, user: { ...individual.user, username: e.target.value } })} type="text" id="username" placeholder="Username" value={individual.user.username} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={8} onChange={(e) => setIndividual({ ...individual, user: { ...individual.user, password: e.target.value } })} type="password" id="password" placeholder="Password" value={individual.user.password} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input type="password" id="confirm-password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input minLength={12} type="tel" id="phone-number" placeholder="Phone Number" onChange={(e) => setIndividual({ ...individual, user: { ...individual.user, phone_number: e.target.value } })} value={individual.user.phone_number} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input type="text" id="college" placeholder="College" onChange={(e) => setIndividual({ ...individual, college: e.target.value })} value={individual.college} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input type="text" id="country" placeholder="Country" onChange={(e) => setIndividual({ ...individual, country: e.target.value })} value={individual.country} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input min={18} max={120} type="number" id="age" placeholder="Age" onChange={(e) => setIndividual({ ...individual, age: e.target.value })} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input type="text" id="qualification" placeholder="Highest Qualification" onChange={(e) => setIndividual({ ...individual, degree: e.target.value })} value={individual.degree} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <input type="text" id="skills" placeholder="Skills (comma separated values)" onChange={(e) => setIndividual({ ...individual, skills: e.target.value.split(',').map((value) => (value.trim(' ', ''))) })} value={individual.skills.join(',')} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <TextField id="outlined-multiline-static" label="Bio" multiline rows={4} onChange={(e) => setIndividual({ ...individual, bio: e.target.value })} value={individual.bio} focused sx={{ width: "100%" }} />
              </td>
            </tr>
            <tr>
              <td style={{ paddingBottom: '10px' }}>
                <Button variant="contained" color="primary" onClick={(e) => {
                  e.preventDefault(); submitForm({ individual }).then((value) => {
                    if (value.error) {
                      alert(value.error);
                    }
                    else
                      navigate('/login');
                  })
                }} disabled={!!error.length} type="submit">Submit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="error">
        {error.map((value) => (
          <Typography key={value} variant="body1" color="error">{value}</Typography>
        ))}
      </div>
    </>
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
  if (!response.ok) {
    return {
      error: data.message
    }
  };
  return data;
}

export default Form;
