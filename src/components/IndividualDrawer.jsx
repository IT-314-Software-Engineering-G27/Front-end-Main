import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../Login/Logo.png'
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import {
    AccountBoxRounded as AccountBoxRoundedIcon,
    PostAdd as PostAddIcon,
    WorkRounded as WorkRoundedIcon,
    CloudUploadRounded as CloudUploadRoundedIcon,
    ContactSupportRounded as ContactSupportRoundedIcon} from '@mui/icons-material';

export default function IndividualDrawer() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: 'Home', icon: <img src={Logo} alt="Logo" style={{ width: '24px', height: '24px' }} />, link: '/' },
          { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/individuals/654ce9d45e6e267a428a29d2' },
          { text: 'Posts', icon: <PostAddIcon />, link: '/posts' },
          { text: 'Jobs', icon: <WorkRoundedIcon />, link: '/jobs' },
          { text: 'Job Application', icon: <CloudUploadRoundedIcon />, link: '/organizations/JobRegistration' },
          { text: 'Contact Us', icon: <ContactSupportRoundedIcon />, link: '/contact-us' },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{mt:1, mb:2}}>{<DensityMediumRoundedIcon/>}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}