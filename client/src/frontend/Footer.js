import React from "react";
import "./css/style.css";
import "./css/footer.css";
import logo from "./css/img/logo1.png";

export default function Footer() {
	return (
		<footer className="footer-distributed">
			<div className="footer-left">
				<img src={logo} />
				<p className="footer-links">
					<a href="/">Home</a>|<a href="contact">Contact</a>|
					<a href="/#hotelAtlantis">About Us</a>
				</p>
				<p className="footer-company-name">
					ATLANTIS GROUP OF HOTELS Pvt. Ltd.
				</p>
				<br />
			</div>
			<div className="footer-right">
				<br />
				<p id="follow">CONTACT US</p>
				<div className="c-icon">
					<i className="fa fa-phone" />
					<p>+91 22-27782183</p>
					<br />
					<i className="fa fa-envelope" />
					<p>
						<a href="mailto:hotelatlantisproject@gmail.com">
							hotelatlantisproject@gmail.com
						</a>
					</p>
				</div>
				<p id="follow">FOLLOW US ON SOCIAL MEDIA</p>
				<div className="footer-icons">
					<a href="https://m.facebook.com/hotelatlantis/">
						<i className="fa fa-facebook" />
					</a>
					<a href="https://mobile.twitter.com/ATLANTIS">
						<i className="fa fa-twitter" />
					</a>
					<a href="https://instagram.com/thehotelatlantis?igshid=17xyyfahe234d">
						<i className="fa fa-instagram" />
					</a>
					<a href="https://youtube.com/c/AtlantisthePalmTV">
						<i className="fa fa-youtube" />
					</a>
				</div>
			</div>
			<div className="mapside">
				<div className="mapDiv" style={{ right: "-50px" }}>
					&nbsp;&nbsp;
					<iframe
						width={350}
						height={200}
						frameBorder={0}
						scrolling="no"
						marginHeight={0}
						marginWidth={0}
						src="https://www.openstreetmap.org/export/embed.html?bbox=-122.25184679031373%2C37.861691632077644%2C-122.2436285018921%2C37.8667906114285&layer=mapnik&marker=37.86424116585334%2C-122.2477376461029"
						style={{
							float: "right",
							border: "1px solid #ffc800",
							boxShadow: "-1px 6px 44px -2px rgba(0,0,0,0.75)",
						}}
					/>
				</div>
				<a href="https://www.openstreetmap.org/way/109193723#map=17/37.86428/-122.24677">
					<button className="mapButton">Expand Map</button>{" "}
				</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className="mapText">
					We serve at Berkeley, California&nbsp;
					<br />
					Hotels at Toronto, Vancouver and
					<br /> Munich comning soon...&nbsp;
					<br />
				</div>
			</div>
		</footer>
	);
}
