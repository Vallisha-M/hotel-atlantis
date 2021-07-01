import "./css/informal.css";

import { Helmet } from "react-helmet";

import { useHistory } from "react-router-dom";
import axios from "axios";
const Informal = () => {
	let history = useHistory();

	if (
		localStorage.getItem("loggedIn") == null ||
		localStorage.getItem("loggedIn") == "false"
	) {
		localStorage.setItem("proceed", "/private/informal");
		history.push("/login");
	}

	var today = new Date();
	var venue = "beach",
		date,
		eventType = "wedding",
		guests = "0-10",
		email = localStorage.getItem("email");

	var res = { isAllowed: false };

	async function check() {
		const params = {
			email: email,
			venue: venue,
			date: date.toString().slice(0, 10),
			guests: guests,
			adjective: eventType,
			token: localStorage.getItem("token"),
		};

		await axios

			.post("http://localhost:5500/informal/add/", params)
			.then((response) => {
				res = response.data;
			})
			.catch((error) => {
				alert(error + "\nTry Re-logging in");
			});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		var flag = true;
		res = { is: "a" };

		if (date == undefined) {
			alert("Select a Date");
			flag = false;
			return;
		}

		var dd = parseInt(String(today.getDate()).padStart(2, "0"));
		var mm = parseInt(String(today.getMonth() + 1).padStart(2, "0")); //January is 0
		if (date == undefined) date = today;
		var yyyy = parseInt(today.getFullYear());
		var yyyy1 = parseInt(date.toString().slice(0, 4));
		var mm1 = parseInt(date.toString().slice(5, 7));
		var dd1 = parseInt(date.toString().slice(8, 10));
		var valueToday = dd + mm * 30 + yyyy * 365;
		var valueSelected = dd1 + mm1 * 30 + yyyy1 * 365;

		if (valueToday > valueSelected) {
			alert("Enter correct date");
			flag = false;
			return;
		}

		if (flag)
			await check().then(() => {
				console.log(res);
				if (res.duplicate == 1)
					alert("Slot taken, Try another date or venue");
				if (res.done == 1) history.push("/private/confirm");
			});
	}

	return (
		<div>
			<Helmet>
				<title>Hotel Atlantis | Informal</title>

				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap"
					rel="stylesheet"
				/>

				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

				<link
					rel="stylesheet"
					href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
				/>
				<link
					href="http://fonts.googleapis.com/css?family=Cookie"
					rel="stylesheet"
					type="text/css"
				/>
			</Helmet>
			<br />
			<br />
			<br />
			<br />
			<div>
				<div
					style={{
						overflowY: "hidden",
						textAlign: "center",
						fontFamily: "Oxygen",
					}}
				>
					<h1>Informal Events Planner</h1>
					<h3>
						Answer these questions to help us understand your
						requirements
					</h3>
				</div>
				<br />
				<br />
				<form id="form" name="form" onSubmit={handleSubmit}>
					&nbsp;
					<div className="question">
						<br />
						<h3>
							{" "}
							1. Select venue, beach or indoors?
							<br />
						</h3>
						<br />
						<div style={{ fontSize: "20px" }}>
							<select
								name="venue"
								id="venue"
								className="venue"
								onChange={(e) => {
									venue = e.target.value;
								}}
								style={{
									width: "300px",
									height: "30px",
									fontSize: "20px",
								}}
							>
								<option value="beach">Beach</option>
								<option value="indoors">Indoors</option>

								<br />
								<br />
							</select>
						</div>
						<br />
						<a href="gallery">Click Here</a> to view our Gallery.
						<br />
					</div>
					<br />
					<br />
					<br />
					<br />
					<div className="question">
						<label htmlFor="eventType">
							<h3>
								2. Which one of these best describes you event
								:&nbsp;
							</h3>
						</label>
						<br />
						<select
							name="eventType"
							id="eventType"
							className="eventType"
							onChange={(e) => {
								eventType = e.target.value;
							}}
						>
							<option value="Wedding">Wedding</option>
							<option value="Birthday - kid">
								Birthday - Kid
							</option>
							<option value="Birthday - Adult">
								Birthday - Adult
							</option>
							<option value="Other Family Event">
								Other Family Event
							</option>
							<option value="Party">Party</option>
							<option value="Other">Other</option>

							<br />
							<br />
						</select>
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<div className="question">
						<label htmlFor="guests">
							<h3>
								4. How many guests are expected to
								arrive?&nbsp;&nbsp;&nbsp;
							</h3>
						</label>
						<br />
						<select
							name="guests"
							id="guestSelect"
							className="guests"
							onChange={(e) => {
								guests = e.target.value;
								alert(guests);
							}}
						>
							<option value="0-10">0 - 10</option>
							<option value="10-30">10 - 30</option>
							<option value="30-80">30 - 80</option>
							<option value="80-150">80 - 150</option>
							<option value="150-200">150 - 200</option>
							<option value="200-500">200 - 500</option>
							<option value="500+">500+</option>
						</select>
						<br />
						<br />
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<div className="question">
						<label htmlFor="date">
							<h3>
								5. When do you plan to host the
								event?&nbsp;&nbsp;&nbsp;
							</h3>
						</label>
						<br />
						<br />
						<input
							type="date"
							id="date"
							name="date"
							onChange={(e) => {
								date = e.target.value;
							}}
						/>
						<br />
						<br />
						<br />
						<br />
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<input
						type="submit"
						className="submitButton"
						defaultValue="Confirm"
						style={{ border: "2px solid #ffc800" }}
					/>
				</form>
			</div>
		</div>
	);
};

export default Informal;
