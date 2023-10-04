import React from 'react';
import Image from '../assets/images/ProfilePicture.svg';

function ProfilePicture() {
	return (
		<img src={Image} alt="ProfilePicture" style = {{ textAlign: 'center' }} />
	);
}

export default ProfilePicture;