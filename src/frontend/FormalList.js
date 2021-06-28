import React, { useState, useEffect } from "react";
import axios from "axios";

const FormalList = () => {
	var email_loc = localStorage.getItem("email");
	const [fevents, setFevents] = useState([]);

	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
		};

		await axios
			.get("http://localhost:5000/formal/show_email", { params })
			.then((response) => {
				var r = response.data;
				setFevents(r);
			})
			.catch((error) => console.log(error));
	};
	if (fevents.length == 0) {
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
						<td>Guests</td>
						<td>Date</td>
					</tr>
					{fevents.map((fevent, index) => {
						return (
							<tr>
								<td>{fevent.email}</td>
								<td>{fevent.guests}</td>
								<td>{fevent.date.substr(0, 10)}</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
};

export default FormalList;
