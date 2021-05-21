import React, { useEffect, useState } from "react";
import axios from "axios";
import Rooms_Payment from "./Rooms_Payment";

const RoomDetails = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		await axios({
			method: "get",
			url: "http://localhost:5000/rooms/show",
		})
			.then((response) => {
				setRooms(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return <Rooms_Payment room={rooms} />;
};
export default RoomDetails;
