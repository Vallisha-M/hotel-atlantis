import "./css/rooms.css";

import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AlertDialogSlide from "./AlertDialogSlide";
import "./css/loading.css";
import $ from "jquery";
import load from "./img/loading.gif";
const Rooms_Booking = () => {
	let history = useHistory();
	// if (
	//   localStorage.getItem("loggedIn") == null ||
	//   localStorage.getItem("loggedIn") == "false"
	// ) {
	//   localStorage.setItem("proceed", "/rooms")
	//   history.push("/protect")
	// }
	const [price, setPrice] = useState("");
	const [checkindate, setCheckindate] = useState("");
	const [checkoutdate, setCheckoutdate] = useState("");
	const [roomtype, setRoomtype] = useState("standard_room");
	const [numberofpeople, setNumberofpeople] = useState("1");
	var rooms,
		url_var = "";

	useEffect(() => {
		showPrice();
	});

	async function checkAvailability() {
		const params = {
			checkindate: checkindate,
			checkoutdate: checkoutdate,
			roomtype: roomtype,
		};
		$(".loading").css("display", "block");
		await axios
			.get("http://localhost:5500/rooms/show", { params })
			.then((response) => {
				$(".loading").css("display", "none");
				rooms = response.data;
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				console.log(error);
				alert(error);
			});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		var flag = true;
		if (checkindate >= checkoutdate) flag = false;
		else {
			var d = new Date(),
				cid = new Date(checkindate);
			if (cid < d) flag = false;
		}
		if (!flag) history.push("/rooms/error");
		else {
			await checkAvailability().then(() => {
				var cnt = rooms.length;
				if (url_var == "confirm") {
					if (cnt >= 3) url_var = "unavailable";
				}
				localStorage.setItem("cid", checkindate);
				localStorage.setItem("cod", checkoutdate);
				localStorage.setItem("numberofpeople", numberofpeople);
				localStorage.setItem("roomtype", roomtype);
				localStorage.setItem("amt", price);
				history.push("/rooms/" + url_var);
			});
		}
	}

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
			url_var = "confirm";
			setPrice(amt);
		} else {
			setPrice("");
			url_var = "error";
		}
	}

	return (
		<div>
			<div class="loading" id="loading">
				<img class="load" src={load} />
			</div>
			<div className="bg">
				<div
					className="center"
					style={{
						padding: "30px",
						fontFamily: "oxygen",
						fontSize: "20px",
					}}
				>
					<form name="booking" onSubmit={handleSubmit}>
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
								<option value="standard_room" selected>
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
								placeHolder={1}
								defaultValue={1}
								value={numberofpeople}
								onChange={(e) =>
									setNumberofpeople(e.target.value)
								}
								required
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
								type="submit"
								value="Check Availabilty"
								name="Check Availabilty"
								onClick={handleSubmit}
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
									width: "200px",
									height: "50px",
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
