import React, { useMemo } from "react";
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
  NewspaperOutlined as NewspaperRoundedIcon,
} from '@mui/icons-material';

const organizationOptionList = [
  { text: 'Events', icon: <EventRoundedIcon />, link: '/events' },
  { text: 'Job Profile Post', icon: <CloudUploadRoundedIcon />, link: '/organizations/JobRegistration' },
];

const individualOptionList = [
  { text: 'Jobs', icon: <WorkRoundedIcon />, link: '/jobs' },
];

const generalOptionList = [
  { text: 'Home', icon: <img src={Logo} alt="Logo" style={{ width: '24px', height: '24px' }} />, link: '/' },
  { text: 'Contact Us', icon: <ContactSupportRoundedIcon />, link: '/contact-us' },
];

const userOptionList = [
  { text: 'Profile', icon: <AccountBoxRoundedIcon />, link: '/profile' },
  { text: 'Edit Profile', icon: <SettingsAccessibilityRoundedIcon />, link: '/profile/edit' }, { text: 'Contacts', icon: <ContactsRoundedIcon />, link: '/contacts' },
  { text: 'Posts', icon: <NewspaperRoundedIcon />, link: '/posts' },
  { text: 'Make Post', icon: <PostAddIcon />, link: '/makepost' },
  { text: 'Individuals', icon: <PersonRoundedIcon />, link: '/individuals' },
  { text: 'Organizations', icon: <CorporateFareRoundedIcon />, link: '/organizations' },
];



function SideBar() {
  const auth = useAuth();
  const optionList = useMemo(() => {
    if (auth?.session?.user?.individual)
      return [...generalOptionList, ...userOptionList, ...individualOptionList];
    else if (auth?.session?.user?.organization)
      return [...generalOptionList, ...userOptionList, ...organizationOptionList];
    else
      return [...generalOptionList];
  }, [auth?.session?.user?.individual, auth?.session?.user?.organization]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <div id='drwr'>
        <Drawer optionList={optionList} />
      </div>
    </div>
  );
};

export default SideBar;

