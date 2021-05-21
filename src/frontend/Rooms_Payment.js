import "./css/rooms.css";
import "./css/scrolling.css";
import "./css/welcome.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Rooms_Payment = () => {
	var cid = localStorage.getItem("cid");
	var cod = localStorage.getItem("cod");
	var amt = localStorage.getItem("amt");
	var numberofpeople = localStorage.getItem("numberofpeople");
	var roomtype = localStorage.getItem("roomtype");

	const handleSubmit = () => {
		const room = {
			checkindate: cid,
			checkoutdate: cod,
			roomtype: roomtype,
			numberofpeople: numberofpeople,
		};
		axios
			.post("http://localhost:5000/rooms/add/", room)
			.then(() => {
				console.log("Room added");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Helmet>
				<link rel="stylesheet" href="css/rooms.css" />
			</Helmet>
			<div
				align="center"
				style={{
					fontFamily: "oxygen",
					marginLeft: "480px",
					maxWidth: "600px",
					paddingTop: "60px",
				}}
			>
				<h1>Rooms are available as per your choice</h1>
				<br />
				<h2>Confirm your details</h2>
				<br />
				<hr />
				<p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
					Name: Vishal Khot
				</p>
				<hr />
				<p style={{ padding: "10px" }}>Email: vishalkh01@gmail.com</p>
				<hr />
				<p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
					Mobile: 6382628233
				</p>
				<hr />
				<p style={{ padding: "10px" }}>
					Check-in date: <span id="Check_in">{cid}</span>
				</p>
				<hr />
				<p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
					Check-out date: <span id="Check_out">{cod}</span>
				</p>
				<hr />
				<p style={{ padding: "10px" }}>
					Amount payable ($) : <span id="amount">{amt}</span>
				</p>
				<hr />
			</div>
			<br />
			<div className="center" align="center">
				<form name="Payment" action="" onSubmit={handleSubmit}>
					<p style={{ display: "table-row" }}>
						<label>Card Number:</label>
						<input
							type="number"
							name="cardnumber"
							min="1000000000000000"
							max="9999999999999999"
							required
						/>
						&nbsp;
						<span id="cardno" />
						<br />
						<br />
					</p>
					<p style={{ display: "table-row" }}>
						<label>Card type:</label>
						Debit{" "}
						<input
							type="radio"
							name="card"
							defaultValue="debit"
							required
						/>
						Credit{" "}
						<input
							type="radio"
							name="card"
							defaultValue="credit"
							required
						/>
						<br />
						<br />
					</p>
					<p style={{ display: "table-row" }}>
						<label>CVV:</label>
						<input
							type="number"
							name="cvv"
							required
							min="000"
							max="999"
						/>
						<br />
						<br />
					</p>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
					<input
						type="submit"
						defaultValue="Confirm Payment"
						id="submitBtn"
						className="button"
					/>
				</form>
				<br />
			</div>
		</div>
	);
};

export default Rooms_Payment;
