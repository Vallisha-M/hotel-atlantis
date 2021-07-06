import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import dateDiff from "./js/dateDiff";
import "./css/loading.css";
import $ from "jquery";
import load from "./img/loading.gif";
const IndianpreList = () => {
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
	useEffect(async () => {
		await getEvents();
	}, []);

	const getEvents = async () => {
		var params = {
			email: email_loc,
			token: localStorage.getItem("token"),
		};
		$(".loading").css("display", "block");
		await axios
			.get(
				"https://hotel-atlantis-project.herokuapp.com/indian_pre/show_email",
				{ params }
			)
			.then((response) => {
				$(".loading").css("display", "none");
				var r = response.data;
				setDevents(r);
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				alert("ERROR");
			});
	};
	if (devents.length == 0) {
		return (
			<div>
				<div class="loading" id="loading">
					<img class="load" src={load} />
				</div>
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
						<td>Checkin</td>

						<td>Time</td>
						<td>Order</td>
					</tr>
					{devents.map((devent, index) => {
						var ans = "";
						for (const [key, value] of Object.entries(
							devent.order
						)) {
							ans = ans.concat(`${key}: ${value}` + ", ");
						}
						return (
							<tr>
								<td>{devent.checkin}</td>

								<td>{devent.time}</td>
								<td>{ans}</td>
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
												$(".loading").css(
													"display",
													"block"
												);
												await axios
													.post(
														"https://hotel-atlantis-project.herokuapp.com/indian_pre/cancel/",
														{
															email: devent.email,
															checkin:
																devent.checkin,
															seats: devent.seats,
															time: devent.time,
															order: devent.order,
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
															alert("ERROR");
														}
													})
													.catch((e) => {
														$(".loading").css(
															"display",
															"none"
														);
														alert(
															e +
																"\nTry Re-logging in"
														);
													});
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

export default IndianpreList;
