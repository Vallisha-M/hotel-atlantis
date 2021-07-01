import React, { useEffect, useState } from "react";
import axios from "axios";
import EventTimeLine from "./EventTimeLine.js";

export default function EventList() {
	const [events, getEvents] = useState("");

	useEffect(() => {
		getAllEvents();
	}, []);

	const getAllEvents = () => {
		axios({
			method: "get",
			url: "http://localhost:5500/event/",
		})
			.then((response) => {
				const allEvents = response.data;
				getEvents(allEvents);
			})
			.catch((error) => console.log(error));
	};
	return <EventTimeLine events={events} />;
}
