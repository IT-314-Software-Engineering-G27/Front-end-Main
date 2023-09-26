import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import PhoneImage from './Phone.png';
import DocumentImage from './document.png';
import LogoImage from './Logo.png';

const useStyles = makeStyles((theme) => ({
  log: {
    /* width: 100vw; */
    width: 'fit-content',
  },
  contact: {
    height: '30px',
    padding: '10px',
  },
  legal: {
    height: '30px',
    padding: '10px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '30px',
    marginTop: '10px',
    paddingLeft: '3ex',
    width: '170ex',
    justifyContent: 'space-between',
  },
  leftnav: {
    /* width: 50%; */
    width: '15ex',
  },
  rightnav: {
    /* width: 50%; */
    /* width: 15ex; */
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '15px',
  },
  bdy: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
    marginRight: 0,
    paddingRight: 0,
  },
  form: {
    paddingLeft: '30px',
    marginRight: '45ex',
    width: '50ex',
  },
  SAlogo: {
    width: '60ex',
    height: '70ex',
    justifyContent: 'center',
    marginRight: 0,
    paddingRight: 0,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  radio1: {
    width: '50%',
  },
  radio2: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inbox: {
    width: '100%',
    height: '30px',
    borderRadius: '1.5ex',
  },
  email: {
    background: `url("./human.png") no-repeat`,
    backgroundSize: '3ex',
    backgroundPosition: '99%',
  },
  adjust: {
    marginBottom: '2px',
  },
  signInbtn: {
    width: '100%',
    height: '35px',
    backgroundColor: '#2f1263',
    color: 'white',
    borderRadius: '2em',
  },
  snBtn: {
    marginTop: '40px',
    width: '100%',
  },
  footer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remember: {
    width: '20ex',
  },
  help: {
    width: '11ex',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  helpLink: {
    color: 'black',
  },
  lastLine: {
    marginTop: '35px',
    paddingTop: '35px',
    width: '40ex',
  },
  lastLineLink: {
    color: '#2f1263',
    fontWeight: 'bold',
  },
  snup: {
    width: '150px',
    height: '30px',
    backgroundColor: '#2f1263',
    borderRadius: '2em',
    marginRight: '50px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [regi, setRegi] = useState('');

  const handleEventChange = (evnt) => {
    setRegi(evnt.target.value);
  };

  return (
    <div className={classes.log}>
      <div className={classes.nav}>
        <div className={classes.leftnav}>
          <Link to=''>
            <img src={DocumentImage} alt="legal section" className={classes.legalImage} />
          </Link>
          <Link to=''>
            <img src={PhoneImage} alt="contact us" className={classes.contactImage} />
          </Link>
        </div>
        <div className={classes.rightnav}>
          <Button className={classes.snup} component={Link} to='/Register'>
            Sign up
          </Button>
        </div>
      </div>
      <div className={classes.bdy}>
        <Paper elevation={3} className={classes.form}>
          <Typography variant="h4">Sign in</Typography>
          <div className={classes.check}>
            <RadioGroup name="regi" value={regi} onChange={handleEventChange}>
              <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
              <FormControlLabel value="Organisation" control={<Radio />} label="Organisation" />
            </RadioGroup>
          </div>
          <div>
            <Typography className={classes.adjust}>Email or phone number</Typography>
            <TextField type="text" className={classes.inbox} InputProps={{ id: 'email' }} />
          </div>
          <div>
            <Typography className={classes.adjust}>Password</Typography>
            <TextField type="password" className={classes.inbox} InputProps={{ id: 'pswd' }} />
          </div>
          <div className={classes.snBtn}>
            <Button className={classes.signInbtn}>Sign in</Button>
          </div>
          <Grid container className={classes.footer}>
            <Grid item xs={6}>
              <div className={classes.remember}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                  labelPlacement="end"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.help}>
                <Link to=''>Need help?</Link>
              </div>
            </Grid>
          </Grid>
          <div className={classes.lastLine}>
            Don't have an account?
            <Link to="/Register">Sign up</Link>
          </div>
        </Paper>
      </div>
      <div id='lg'>
        <img src={LogoImage} alt="startApp logo" className={classes.SAlogo} />
      </div>
    </div>
  );
};

export default Login;

