import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import dateDiff from "./js/dateDiff";
import "./css/loading.css";
import $ from "jquery";
import load from "./img/loading.gif";
const FormalList = () => {
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
	const [fevents, setFevents] = useState([]);
	let history = useHistory();
	useEffect(() => {
		getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
			token: localStorage.getItem("token"),
		};
		$(".loading").css("display", "block");
		await axios
			.get(
				"https://hotel-atlantis-project.herokuapp.com/formal/show_email",
				{ params }
			)
			.then((response) => {
				$(".loading").css("display", "none");
				var r = response.data;
				setFevents(r);
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				console.log(error);
			});
	};
	if (fevents.length == 0) {
		return (
			<div>
				<br />
				(You have not made any reservations yet.)
			</div>
		);
	} else {
		return (
			<div style={{ fontSize: "20px" }}>
				<div class="loading" id="loading">
					<img class="load" src={load} />
				</div>
				<table>
					<tr style={{ fontWeight: "bold" }}>
						<td>Guests</td>
						<td>Date</td>
					</tr>
					{fevents.map((fevent, index) => {
						return (
							<tr>
								<td>{fevent.guests}</td>
								<td>{fevent.date}</td>
								<td
									onClick={async () => {
										if (window.confirm("Are you sure?")) {
											var flag = dateDiff(
												today,
												fevent.date
											);

											if (flag) {
												$(".loading").css(
													"display",
													"block"
												);
												await axios
													.post(
														"https://hotel-atlantis-project.herokuapp.com/formal/cancel/",
														{
															email: fevent.email,
															date: fevent.date,
															guests: fevent.guests,
															token: localStorage.getItem(
																"token"
															),
														}
													)
													.then((res) => {
														$(".loading").css(
															"display",
															"none"
														);
														if (res.data.done == 1)
															history.push(
																"/cancel/success"
															);
														else {
															$(".loading").css(
																"display",
																"none"
															);
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

export default FormalList;
