import React from 'react';
import '../pages/EventRegistration.css';
import Image from '../assets/images/Logo.svg';

function Logo() {
	return (
		<img src={Image} alt="Logo" className="logo" />
	);
}

export default Logo;