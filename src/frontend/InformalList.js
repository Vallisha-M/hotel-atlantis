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
	const [ievents, setIevents] = useState([]);
	let history = useHistory();
	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
		};

		await axios
			.get("http://localhost:5500/informal/show_email", { params })
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
				(You have not made any reservations yet.)
			</div>
		);
	} else {
		return (
			<div style={{ fontSize: "20px" }}>
				<table>
					<tr>
						<td>Venue</td>
						<td>Adjective</td>
						<td>Guests</td>
						<td>Date</td>
					</tr>
					{ievents.map((ievent, index) => {
						return (
							<tr>
								<td>{ievent.venue}</td>
								<td>{ievent.adjective}</td>
								<td>{ievent.guests}</td>
								<td>{ievent.date}</td>
								<td
									onClick={async () => {
										console.log(ievent.date);
										console.log(ievent.email);
										if (window.confirm("Are you sure?")) {
											var flag = dateDiff(
												today,
												ievent.date
											);

											if (flag) {
												await axios
													.post(
														"http://localhost:5500/informal/cancel/",
														{
															email: ievent.email,
															date: ievent.date,
															guests: ievent.guests,
															eventType:
																ievent.adjective,
															venue: ievent.venue,
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
													.catch((e) => alert(e));
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
