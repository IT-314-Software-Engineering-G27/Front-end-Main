import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/session';
import { useLocation } from 'react-router-dom';
import Drawer from "./Drawer";
import Logo from '../Login/Logo.png';
import { Link } from "react-router-dom";
import {
  Event as EventRoundedIcon,
  AccountBoxRounded as AccountBoxRoundedIcon,
  PostAdd as PostAddIcon,
  CloudUploadRounded as CloudUploadRoundedIcon,
  ContactSupportRounded as ContactSupportRoundedIcon,
  CorporateFareRounded as CorporateFareRoundedIcon,
  WorkRounded as WorkRoundedIcon,
  PersonRounded as PersonRoundedIcon,
  SettingsAccessibilityRounded as SettingsAccessibilityRoundedIcon,
  ContactsRounded as ContactsRoundedIcon,
  NewspaperOutlined as NewspaperRoundedIcon,
} from '@mui/icons-material';

const organizationOptionList = [
  { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/profile' },
  { text: 'Edit Profile', icon: <SettingsAccessibilityRoundedIcon />, link: '/profile/edit' },
  { text: 'Events', icon: <EventRoundedIcon />, link: '/events' },
  { text: 'Job Profile Post', icon: <CloudUploadRoundedIcon />, link: '/organizations/JobRegistration' },
  { text: 'Contacts', icon: <ContactsRoundedIcon />, link: '/contacts' },
  { text: 'Posts', icon: <NewspaperRoundedIcon />, link: '/posts' },
  { text: 'Make Post', icon: <PostAddIcon />, link: '/makepost' },
  { text: 'Individuals', icon: <PersonRoundedIcon />, link: '/individuals' },
  { text: 'Organizations', icon: <CorporateFareRoundedIcon />, link: '/organizations' },
];

const individualOptionList = [
  { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/profile' },
  { text: 'Edit Profile', icon: <SettingsAccessibilityRoundedIcon />, link: '/profile/edit' },
  { text: 'Jobs', icon: <WorkRoundedIcon />, link: '/jobs' },
  { text: 'Contacts', icon: <ContactSupportRoundedIcon />, link: '/contacts' }, 
  { text: 'Posts', icon: <NewspaperRoundedIcon />, link: '/posts' },
  { text: 'Make Post', icon: <PostAddIcon />, link: '/makepost' },
  { text: 'Individuals', icon: <PersonRoundedIcon />, link: '/individuals' },
  { text: 'Organizations', icon: <CorporateFareRoundedIcon />, link: '/organizations' },
];

const commonOptionList = [
  { text: 'Home', icon: <img src={Logo} alt="Logo" style={{ width: '24px', height: '24px' }} />, link: '/' },
  { text: 'Contact Us', icon: <ContactSupportRoundedIcon />, link: '/contact-us' },
];

function SideBar() {
  // const drawerWidth = 5;
  const auth = useAuth();
  const location = useLocation();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (auth?.session?.user?.role) {
      setRole(auth.session.user.role);
    }
  }, [auth?.session?.user]);

  
  if (role === "organization" || role === "individual") {
    return (
      
        <Drawer optionList={commonOptionList.concat(role === "organization" ? organizationOptionList : individualOptionList)} />
        
    
    );
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%'}}>
        <div id='drwr'>
        <Drawer optionList={commonOptionList} />
        </div>
        {location.pathname === '/login'}
      </div>
    );
  }
}

export default SideBar;

