import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/session';
import Drawer from "./Drawer";
import Logo from '../Login/Logo.png';
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
} from '@mui/icons-material';

const organizationOptionList = [
  { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/profile' },
  { text: 'Edit Profile', icon: <SettingsAccessibilityRoundedIcon />, link: '/profile/edit' },
  { text: 'Events', icon: <EventRoundedIcon />, link: '/events' },
  { text: 'Job Profile Post', icon: <CloudUploadRoundedIcon />, link: '/organizations/JobRegistration' },
  { text: 'Contacts', icon: <ContactsRoundedIcon />, link: '/contacts' },
];

const individualOptionList = [
  { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/profile' },
  { text: 'Edit Profile', icon: <SettingsAccessibilityRoundedIcon />, link: '/profile/edit' },
  { text: 'Jobs', icon: <WorkRoundedIcon />, link: '/jobs' },
  { text: 'Contacts', icon: <ContactSupportRoundedIcon />, link: '/contacts' },
];

const commonOptionList = [
  { text: 'Home', icon: <img src={Logo} alt="Logo" style={{ width: '24px', height: '24px' }} />, link: '/' },
  { text: 'Posts', icon: <PostAddIcon />, link: '/posts' },
  { text: 'Individuals', icon: <PersonRoundedIcon />, link: '/individuals' },
  { text: 'Organizations', icon: <CorporateFareRoundedIcon />, link: '/organizations' },
  { text: 'Contact Us', icon: <ContactSupportRoundedIcon />, link: '/contact-us' },
];

function SideBar() {
  const auth = useAuth();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (auth?.session?.user?.role) {
      setRole(auth.session.user.role);
    }
  }, [auth?.session?.user]);


  if (role === "organization")
    return <Drawer optionList={commonOptionList.concat(organizationOptionList)} />;
  else if (role === "individual")
    return <Drawer optionList={commonOptionList.concat(individualOptionList)} />;
  else
    return <Drawer optionList={commonOptionList} />;
}




export default SideBar;


