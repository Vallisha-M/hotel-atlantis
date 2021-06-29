import React, { useEffect, useState } from "react";
import axios from "axios";

const RoomList = () => {
	var email_loc = localStorage.getItem("email");
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		getRooms();
	}, []);

	const getRooms = async () => {
		var params = {
			email: email_loc,
		};

		await axios
			.get("http://localhost:5000/rooms/show_email", { params })
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
					<tr>
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
							</tr>
						);
					})}
				</table>
			</div>
		);
	}
};

export default RoomList;
