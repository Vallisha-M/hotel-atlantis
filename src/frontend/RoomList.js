import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import dateDiff from "./js/dateDiff";

const RoomList = () => {
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
	const [rooms, setRooms] = useState([]);
	let history = useHistory();

	useEffect(() => {
		getRooms();
	}, []);

	const getRooms = async () => {
		var params = {
			email: email_loc,
		};

		await axios
			.get("http://localhost:5500/rooms/show_email", { params })
			.then((response) => {
				var r = response.data;
				setRooms(r);
			})
			.catch((error) => console.log(error));
	};

	function switchfunc(roomtype) {
		switch (roomtype) {
			case "standard_room":
				return "Standard Room";
			case "deluxe_room":
				return "Deluxe Room";
			case "suite":
				return "Suite";
		}
	}

	if (rooms.length == 0) {
		return (
			<div>
				<br />
				<br />
				(You have not booked any rooms yet)
			</div>
		);
	} else {
		return (
			<div style={{ fontSize: "20px" }}>
				<br />
				<br />
				<table>
					<tr style={{ fontWeight: "bold" }}>
						<td>Check-in Date</td>
						<td>Check-out Date</td>
						<td>Room Type</td>
						<td>Number of People</td>
					</tr>
					{rooms.map((room, index) => {
						return (
							<tr>
								<td>{room.checkindate.substr(0, 10)}</td>
								<td>{room.checkoutdate.substr(0, 10)}</td>
								<td>{switchfunc(room.roomtype)}</td>
								<td>{room.numberofpeople}</td>
								<td
									onClick={async () => {
										if (window.confirm("Are you sure?")) {
											var flag = dateDiff(
												today,
												room.checkindate
											);

											if (flag) {
												await axios
													.post(
														"http://localhost:5500/rooms/cancel",
														{
															email: email_loc,
															checkindate:
																room.checkindate,
															checkoutdate:
																room.checkoutdate,
															numberofpeople:
																room.numberofpeople,
															roomtype:
																room.roomtype,
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

export default RoomList;
