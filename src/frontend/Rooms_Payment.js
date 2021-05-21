import "./css/rooms.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Rooms_Payment = (props) => {
	const { room } = props;
	console.log(room);
	var cid, cod;

	if (typeof room[0] == "undefined") {
		cid = "";
		cod = "";
	} else {
		cid = room[0].checkindate.substring(0, 10);
		cod = room[0].checkoutdate.substring(0, 10);
	}

	return (
		<div>
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
					Amount payable ($) : <span id="amount">{}</span>
				</p>
				<hr />
			</div>
			<br />
			<div className="center">
				<form
					name="Payment"
					action="confirmation_rooms.html"
					onsubmit="return valid()"
					method="post"
				>
					<p style={{ display: "table-row" }}>
						<label>Card Number:</label>
						<input
							type="text"
							name="cardnumber"
							onchange="valid()"
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
						<input type="number" name="cvv" required />
						<br />
						<br />
					</p>
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
					<input
						type="submit"
						defaultValue="Confirm Payment"
						id="subBtn"
						className="button"
					/>
				</form>
				<br />
			</div>
		</div>
	);
};

export default Rooms_Payment;
