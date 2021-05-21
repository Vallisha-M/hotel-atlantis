import "./css/rooms.css";

import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertDialogSlide from "./AlertDialogSlide";

const Rooms_Booking = () => {
	const [price, setPrice] = useState("");
	const [checkindate, setCheckindate] = useState("");
	const [checkoutdate, setCheckoutdate] = useState("");
	const [roomtype, setRoomtype] = useState("default");
	const [numberofpeople, setNumberofpeople] = useState("");
	const [url_var, setUrl_Var] = useState("");

	useEffect(() => {
		showPrice();
	});

	const handleSubmit = () => {
		localStorage.setItem("cid", checkindate);
		localStorage.setItem("cod", checkoutdate);
		localStorage.setItem("numberofpeople", numberofpeople);
		localStorage.setItem("roomtype", roomtype);
		localStorage.setItem("amt", price);
		console.log("http://localhost:3000/rooms/" + url_var);
	};

	function showPrice() {
		var diff = 0,
			ms = 24 * 60 * 60 * 1000,
			x = new Date(checkindate),
			y = new Date(checkoutdate),
			z = roomtype,
			amt;
		diff = Math.floor((y - x) / ms);
		if (diff > 0) {
			if (z === "standard_room") amt = 100 * diff;
			else if (z === "deluxe_room") amt = 200 * diff;
			else if (z === "suite") amt = 350 * diff;
			setUrl_Var("confirm");
			setPrice(amt);
		} else {
			setPrice("");
			setUrl_Var("error");
		}
	}

	return (
		<div>
			<div className="bg">
				<div
					className="center"
					style={{
						padding: "30px",
						fontFamily: "oxygen",
						fontSize: "20px",
					}}
				>
					<form
						name="booking"
						onSubmit={handleSubmit}
						action={"http://localhost:3000/rooms/" + url_var}
					>
						<p style={{ display: "table-row" }}>
							<label>Check-in: </label>
							<input
								type="date"
								name="checkindate"
								value={checkindate}
								required
								onChange={(e) => setCheckindate(e.target.value)}
							/>
							<br />
							<br />
						</p>
						<p style={{ display: "table-row" }}>
							<label>Check-out: </label>
							<input
								type="date"
								name="checkoutdate"
								value={checkoutdate}
								required
								onChange={(e) =>
									setCheckoutdate(e.target.value)
								}
							/>
							<br />
							<br />
						</p>
						<p style={{ display: "table-row" }}>
							<label>Choose your room</label>
							<select
								name="roomtype"
								required
								style={{ width: "145px" }}
								value={roomtype}
								onChange={(e) => setRoomtype(e.target.value)}
							>
								<option value="standard_room">
									Standard Room
								</option>
								<option value="deluxe_room">Deluxe Room</option>
								<option value="suite">Suite</option>
							</select>
						</p>
						<br />
						<p style={{ display: "table-row" }}>
							<label>Number of people</label>
							<input
								min={1}
								max={4}
								type="number"
								style={{ width: "135px" }}
								name="numberofpeople"
								required
								value={numberofpeople}
								onChange={(e) =>
									setNumberofpeople(e.target.value)
								}
							/>
						</p>
						<br />
						<p
							style={{
								display: "table-row",
								paddingBottom: "10px",
							}}
						>
							<label>
								<b>Amount payable </b>($):{" "}
								<span id="amount">{price}</span>
							</label>
						</p>
						<div style={{ marginLeft: "140px", marginTop: "20px" }}>
							<input
								id="submitBtn"
								type="submit"
								value="Check Availabilty"
								name="Check Availabilty"
								style={{
									backgroundColor: "#ffc800",
									border: "none",
									color: "white",
									padding: "15px 32px",
									textAlign: "center",
									textDecoration: "none",
									display: "inline-block",
									fontSize: "16px",
									borderRadius: "7px",
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Rooms_Booking;
