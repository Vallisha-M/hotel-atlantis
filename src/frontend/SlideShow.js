import React from "react";
import "./css/style.css";

import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import slide4 from "./img/slide4.jpg";
import slide5 from "./img/slide5.jpg";

import layoverText from "./css/img/bgSlide2.png";
import scrolldown from "./css/img/scrollDown.png";

export default function SlideShow() {
	return (
		<section>
			<div className="rt-container">
				<div className="col-rt-12">
					<div className="Scriptcontent">
						<center>
							<main>
								<div
									id="slide"
									className="slide"
									style={{
										width: "100%",
										height: "601px",
										top: "56px",
										textAlign: "center",
									}}
								>
									<div
										style={{
											backgroundPosition: "center",
											backgroundImage: `url(${slide1})`,
										}}
									/>
									<div
										style={{
											backgroundPosition: "center",
											backgroundImage: `url(${slide2})`,
										}}
									/>
									<div
										style={{
											backgroundPosition: "center",
											backgroundImage: `url(${slide3})`,
										}}
									/>
									<div
										style={{
											backgroundPosition: "center",
											backgroundImage: `url(${slide4})`,
										}}
									/>
									<div
										style={{
											backgroundPosition: "center",
											backgroundImage: `url(${slide5})`,
										}}
									/>
									<img
										src={layoverText}
										style={{
											position: "relative",
											zIndex: 10,
											float: "left",
											top: "300px",
										}}
									/>
									<a href="#hotelAtlantis">
										<img
											src={scrolldown}
											style={{
												position: "absolute",
												left: "45%",
												zIndex: 10,
												float: "left",
												top: "490px",
												height: "150px",
												width: "200px",
											}}
										/>
									</a>
								</div>
							</main>
						</center>
					</div>
				</div>
			</div>
		</section>
	);
}
