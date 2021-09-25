import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTable,
	faUserTie,
	faUsers,
	faUserPlus,
	faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import "../dashboard.css";
import logo from "../../../../assets/Rhino card logo - PNG.png";

const DashNav = () => {
	return (
		<div className="dash-nav">
			<div className="dash-nav-user-info">
				<div className="dash-nav-user-logo">
					<img
						src={logo}
						alt="Rhino john logo"
						title="Rhino john logo"
						className="dash-nav-logo"
					/>
				</div>
				<div className="dash-nav-user-info-card">
					<FontAwesomeIcon icon={faUserTie} size="2x" />
					<h3 className="dash-nav-user-h3">User's name</h3>
				</div>
			</div>
			<div className="dash-nav-ul">
				<NavLink to="/dashboard#dashboard" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faHouseUser} />
						<p className="dash-nav-li-items-p">Dashboard</p>
					</div>
				</NavLink>
				<NavLink to="/dashboard/users#users" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faUsers} />
						<p className="dash-nav-li-items-p">Users</p>
					</div>
				</NavLink>
				<NavLink to="/register#register" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faUserPlus} />
						<p className="dash-nav-li-items-p">Register a User</p>
					</div>
				</NavLink>
				<NavLink to="/#home-banner" className="dash-nav-li">
					<div className="dash-nav-li-items">
						<FontAwesomeIcon icon={faTable} />
						{localStorage.removeItem("token")}
						<p className="dash-nav-li-items-p">Sign out</p>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default DashNav;
