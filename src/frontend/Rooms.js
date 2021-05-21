import "./css/rooms.css";
import standard_room from "./Images/standard_room.jpg";
import deluxe_room from "./Images/deluxe_room.jpeg";
import suite from "./Images/suite.webp";
import Rooms_Booking from "./Rooms_Booking";
import Rooms_Payment from "./Rooms_Payment";

import { Helmet } from "react-helmet";
import React from "react";
import RoomDetails from "./RoomDetails";

const Rooms = () => {
	return (
		<div>
			<Helmet>
				<script src="js/scrolling.js"></script>
				<title>Rooms | Hotel Atlantis</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<link rel="stylesheet" href="css/welcome.css" />
				<link rel="stylesheet" href="css/scrolling.css" />
				<link
					rel="icon"
					href="Images/favicon.ico"
					type="image/icon type"
				/>
				<link rel="stylesheet" href="css/rooms.css" />
				<link rel="stylesheet" href="css/footer.css" />
				<link
					rel="stylesheet"
					href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
				/>
			</Helmet>

			<section>
				<p
					style={{
						paddingTop: "70px",
						textAlign: "center",
						fontFamily: "oxygen",
						fontSize: "40px",
					}}
				>
					Feel free to choose a room that fits your needs. We'd
					recommend a Suite 😉
				</p>
				<div style={{ margin: "10px" }} className="grid_container">
					<div style={{ width: "450px", height: "350px" }}>
						<p style={{ float: "left" }}></p>
						<p />
						<h1 align="center" style={{ paddingRight: "40px" }}>
							Standard Rooms
						</h1>
						<p />
						<div className="flip-card">
							<div
								className="flip-card-inner"
								style={{ float: "left" }}
							>
								<div className="flip-card-front">
									<img
										src={standard_room}
										style={{
											width: "450px",
											height: "350px",
										}}
									/>
								</div>
								<div className="flip-card-back">
									<p
										style={{
											fontFamily: "oxygen",
											fontSize: "20px",
											padding: "10px",
										}}
									>
										<br />A standard room comes in the
										category of the hotel’s cheapest room.
										It is a type of room, which has a
										king-size bed, or as two beds — this
										room is decorated with two queen-size
										beds. A standard room includes all kinds
										of basic facilities such as a table,
										chair, desk, cupboard, dressing table,
										DVD player, television, telephone,
										coffee maker and a private bathroom. The
										standard rooms include flat-screen TVs,
										separate bars, expensive bath tubs and
										designer interior decoration in the
										room. You won't be disappointed!
									</p>
								</div>
							</div>
						</div>
						<p />
					</div>
					<div style={{ paddingTop: "1px", paddingLeft: "28px" }}>
						<p style={{ float: "center" }}></p>
						<p />
						<h1 align="center" style={{ paddingRight: "10px" }}>
							Deluxe Rooms
						</h1>
						<p />
						<div className="flip-card" style={{ float: "center" }}>
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src={deluxe_room}
										style={{
											width: "450px",
											height: "350px",
										}}
									/>
								</div>
								<div className="flip-card-back">
									<p
										style={{
											fontFamily: "oxygen",
											fontSize: "20px",
											padding: "10px",
										}}
									>
										<br />
										In this room view, location, advanced
										furnishings, decorations and shapes are
										deluxe in every way. We include
										additional amenities in these rooms such
										as a large writing desk, flattering
										flowers, upgraded bathroom and beautiful
										bathrobes.This room can accommodate
										three queen-size beds in a room,
										therefore it is also known as a triple
										room. Deluxe rooms also provide spacious
										seating areas, which are doubled as a
										sleeping place, when the sofa exists on
										the bed.
									</p>
								</div>
							</div>
						</div>
						<p />
					</div>
					<div>
						<p style={{ float: "right", paddingRight: "20px" }}></p>
						<p />
						<h1 align="center" style={{ paddingLeft: "20px" }}>
							Suites
						</h1>
						<p />
						<div className="flip-card" style={{ float: "right" }}>
							<div className="flip-card-inner">
								<div className="flip-card-front">
									<img
										src={suite}
										style={{
											width: "450px",
											height: "350px",
										}}
									/>
								</div>
								<div className="flip-card-back">
									<p
										style={{
											fontFamily: "oxygen",
											fontSize: "20px",
											padding: "10px",
										}}
									>
										<br />A Suite is like a subtle apartment
										inside the hotel. A Suite is much larger
										as compared to the standard room. There
										are bedrooms, living areas and even a
										kitchen. Suites are designed for use by
										merchants and families who live in
										hotels for an extended period of time.
										These rooms are much spacious with
										excellent views and exclusive amenities.
										Suites are more expensive rooms than
										standard rooms and deluxe rooms in the
										hotel. If you wish to enjoy a premium
										and luxury stay, a Suite is the way to
										go!
									</p>
								</div>
							</div>
						</div>
						<p />
					</div>
				</div>
			</section>
			<Rooms_Booking />
		</div>
	);
};

export default Rooms;
