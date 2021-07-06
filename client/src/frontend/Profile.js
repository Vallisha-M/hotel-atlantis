import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./css/events.css";
import axios from "axios";
import RoomList from "./RoomList";
import FormalList from "./FormalList";
import InformalList from "./InformalList";
import DiningList from "./DiningList";
import IndianpreList from "./IndianpreList";
import $ from "jquery";
import "./css/loading.css";
import load from "./img/loading.gif";
const Profile = () => {
	let history = useHistory();
	if (
		localStorage.getItem("loggedIn") == null ||
		localStorage.getItem("loggedIn") == "false"
	) {
		localStorage.setItem("proceed", "/profile");
		history.push("/protect");
	}
	const [user, setUser] = useState("");
	var email_loc = localStorage.getItem("email");
	var name, email, phoneno;

	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		const params = {
			email: email_loc,
			token: localStorage.getItem("token"),
		};
		$(".loading").css("display", "block");
		await axios
			.get("https://hotel-atlantis-project.herokuapp.com/users/show", {
				params,
			})
			.then((response) => {
				$(".loading").css("display", "none");
				setUser(response.data);
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				alert(error + "\nTry Re-logging in");
			});
	};
	const logout = async () => {
		$(".loading").css("display", "block");
		await axios
			.post("https://hotel-atlantis-project.herokuapp.com/users/logout", {
				email: localStorage.getItem("email"),
			})
			.then((res) => {
				$(".loading").css("display", "none");
				if (res.data.done == 1) {
					localStorage.clear();
					history.push("/logout/success");
				} else {
					alert("Logout Unsuccessful");
				}
			})
			.catch((e) => {
				$(".loading").css("display", "none");
				alert(e);
				alert("Logout Unsuccessful");
			});
	};
	if (typeof user[0] == "undefined") {
		name = "";
		email = "";
		phoneno = "";
	} else {
		name = user[0].firstName + " " + user[0].lastName;
		email = user[0].email;
		phoneno = user[0].phone;
	}

	return (
		<div align="center">
			<div class="loading" id="loading">
				<img class="load" src={load} />
			</div>
			<hr color="#ffc800" />
			<div className="main">
				<div className="heading" style={{ width: "200px" }}>
					<br />
					<br />
					<button
						onClick={() => {
							if (window.confirm("Are you sure?")) {
								logout();
							}
						}}
						className="changepass"
						style={{ position: "relative", left: "500px" }}
					>
						Logout
					</button>
					<br />
					User Details
				</div>
				<br />
				{/* User */}
				<div style={{ fontSize: "20px" }}>
					Name: <span>{name}</span>
					<br />
					<br />
					Email ID: <span>{email}</span>
					<br />
					<br />
					Mobile number: <span>{phoneno}</span>
					<br />
					<br />
					<a href="changepassword">
						<button className="changepass">Change password</button>
					</a>
				</div>
				{/* Rooms */}
				<div style={{ fontSize: "20px" }}>
					<div className="heading" style={{ width: "250px" }}>
						<br />
						Room Bookings
					</div>
					<RoomList />
				</div>
				{/* Formal Events */}
				<div style={{ fontSize: "20px" }}>
					<div className="heading" style={{ width: "250px" }}>
						<br />
						Formal Events
					</div>
					<FormalList />
				</div>
				{/* Informal Events */}
				<div style={{ fontSize: "20px" }}>
					<div className="heading" style={{ width: "250px" }}>
						<br />
						Informal Events
					</div>
					<InformalList />
				</div>
				<div style={{ fontSize: "20px" }}>
					<div className="heading" style={{ width: "250px" }}>
						<br />
						Table Reservation
					</div>
					<DiningList />
				</div>
				<div style={{ fontSize: "20px" }}>
					<div className="heading" style={{ width: "250px" }}>
						<br />
						Pre Orders
					</div>
					<IndianpreList />
				</div>
			</div>
		</div>
	);
};

export default Profile;
