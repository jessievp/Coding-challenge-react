import React from 'react';
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from '../Pages/Home';
import CustomizeImage from '../Pages/CustomizeImage';
import Temperature from '../Pages/Temperature';


const Nav = () => {
	return (
		<div>
			<React.Fragment>
			<NavLink to="/"> Home </NavLink>
			<NavLink to="/temperature"> Temperature </NavLink>
			<NavLink to="/customize-image"> Customize Image </NavLink>
			</React.Fragment>
		</div>
	)
}

export default Nav;
