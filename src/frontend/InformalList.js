import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEventListener } from "events";

const InformalList = () => {
	var email_loc = localStorage.getItem("email");
	const [ievents, setIevents] = useState([]);

	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
		};

		await axios
			.get("http://localhost:5000/informal/show_email", { params })
			.then((response) => {
				var r = response.data;
				setIevents(r);
			})
			.catch((error) => console.log(error));
	};
	if (ievents.length == 0) {
		return (
			<div>
				<br />
				<h2>You have not made any reservations yet.</h2>
			</div>
		);
	} else {
		return (
			<div style={{ fontSize: "20px" }}>
				<table>
					<tr>
						<td>Email</td>
						<td>Venue</td>
						<td>Adjective</td>
						<td>Guests</td>
						<td>Date</td>
					</tr>
					{ievents.map((ievent, index) => {
						return (
							<tr>
								<td>{ievent.email}</td>
								<td>{ievent.venue}</td>
								<td>{ievent.adjective}</td>
								<td>{ievent.guests}</td>
								<td>{ievent.date.substr(0, 10)}</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
};

export default InformalList;
