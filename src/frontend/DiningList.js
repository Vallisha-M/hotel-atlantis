import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEventListener } from "events";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import dateDiff from "./js/dateDiff";
const InformalList = () => {
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth() + 1;

	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = "0" + dd;
	}
	if (mm < 10) {
		mm = "0" + mm;
	}
	today = yyyy + "-" + mm + "-" + dd;
	var email_loc = localStorage.getItem("email");
	const [devents, setDevents] = useState([]);
	let history = useHistory();
	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
			token: localStorage.getItem("token"),
		};

		await axios
			.get("http://localhost:5500/indian/show_email", { params })
			.then((response) => {
				var r = response.data;
				setDevents(r);
			})
			.catch((error) => console.log(error));
	};
	if (devents.length == 0) {
		return (
			<div>
				<br />
				(You have not made any reservations yet.)
			</div>
		);
	} else {
		return (
			<div style={{ fontSize: "20px" }}>
				<table>
					<tr style={{ fontWeight: "bold" }}>
						<td>Checkin</td>
						<td>Seats</td>
						<td>Time</td>
						
					</tr>
					{devents.map((devent, index) => {
						return (
							<tr>
								<td>{devent.checkin}</td>
								<td>{devent.seats}</td>
								<td>{devent.time}</td>
							
								<td
									onClick={async () => {
										console.log(devent.checkin);
										console.log(devent.email);
										if (window.confirm("Are you sure?")) {
											var flag = dateDiff(
												today,
												devent.checkin
											);

											if (flag) {
												await axios
													.post(
														"http://localhost:5500/indian/cancel/",
														{
															email: devent.email,
															checkin: devent.checkin,
															seats: devent.seats,
															
															time: devent.time,
															token: localStorage.getItem(
																"token"
															),
														}
													)
													.then((res) => {
														if (res.data.done == 1)
															history.push(
																"/cancel/success"
															);
														else {
															alert("ERROR");
														}
													})
													.catch((e) =>
														alert(
															e +
																"\nTry Re-logging in"
														)
													);
											} else {
												alert(
													"Cannot cancel when less than 2 days remain"
												);
											}
										} else {
											console.log("Not cancelled");
										}
									}}
								>
									<IconButton
										aria-label="delete"
										color="secondary"
									>
										<div style={{ fontSize: "20px" }}>
											Cancel{" "}
										</div>
										<DeleteIcon />
									</IconButton>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
};

export default InformalList;
