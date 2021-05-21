import React from "react";
import "./css/events.css";

export default function EventTimeLine(props) {
	const displayEvents = (props) => {
		const { events } = props;
		if (events.length > 1) {
			return events.map((event, index) => {
				return (
					<tr>
						<td>{event.type}</td>
						<td>{event.performer}</td>
						<td>{event.date.toString().substring(0, 10)}</td>
						<td>{event.time}</td>
					</tr>
				);
			});
		} else {
			return <h2>No events yet</h2>;
		}
	};

	return <>{displayEvents(props)}</>;
}
