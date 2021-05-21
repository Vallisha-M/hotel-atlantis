import React from "react";
import "./css/style.css";
import logo from "./css/img/logo1.png";
import "./css/welcome1.css";

const Navbar = () => {
	return (
		<div>
			<section>
				<div className="navbar" id="navbar">
					<a href="/" className="img">
						<img
							src={logo}
							alt="Home"
							title="Home"
							style={{
								width: "118px",
								height: "52px",
								float: "left",
							}}
						/>
					</a>
					<a
						href="rooms"
						className="button1"
						style={{ width: "140px" }}
					>
						<span>Book a Room</span>
					</a>
					<a
						href="contact"
						className="button1"
						style={{ width: "110px" }}
					>
						<span>Contact Us</span>
					</a>
					<a
						href="dining_page"
						className="button2"
						style={{ width: "70px" }}
					>
						<span>Dining</span>
					</a>
					<a
						href="events"
						className="button2"
						style={{ width: "70px" }}
					>
						<span>Events</span>
					</a>
					<a
						href="index"
						className="button1"
						style={{ width: "130px" }}
					>
						<span>Private Events</span>
					</a>
					<a
						href="gallery"
						className="button2"
						style={{ width: "100px" }}
					>
						<span>Gallery</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
