import axios from "axios";
import load from "./img/loading.gif";
import React, { useEffect, useState } from "react";
import FeedbackList from "./FeedbackList";
export default function FeedbackSlide() {
	const [reviews, setReviews] = useState("");
	useEffect(async () => {
		await getReviews();
	}, []);
	const getReviews = async () => {
		await axios
			.get("https://hotel-atlantis-project.herokuapp.com/feedback/get")
			.then((response) => {
				setReviews(response.data);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
				setReviews({ done: 0, error: 1 });
			});
	};

	return (
		<div style={{ marginLeft: "7px", marginTop: "25px" }}>
			Some reviews;
			<div class="loading" id="loading">
				<img class="load" src={load} />
			</div>
			<table style={{ marginTop: "20px", fontSize: "15px" }}>
				<tr style={{ fontWeight: "bold" }}>
					<td>Name</td>
					<td>Star</td>
					<td>Review</td>
				</tr>

				<FeedbackList events={reviews} />
			</table>
			<div
				classname="feedback-legend"
				style={{ fontSize: "20px", marginTop: "20px" }}
			>
				<div className="fullStar" style={{ marginLeft: "8px" }}>
					🌟 - Full Star{" "}
				</div>
				<div
					className="halfStar"
					style={{ marginLeft: "10px", marginTop: "5px" }}
				>
					☆ &nbsp;- Half Star
				</div>
			</div>
		</div>
	);
}
