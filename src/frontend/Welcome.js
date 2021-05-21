import "./css/style.css";
import "./css/welcome.css";

import { Helmet } from "react-helmet";
import SlideShow from "./SlideShow";
import React from "react";

const Welcome = () => {
	return (
		<div>
			<Helmet>
				<script src="js/scrolling.js"></script>
				<title>Hotel Atlantis | Welcome</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="keywords" content="footer, address, phone, icons" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="stylesheet" href="css/style.css" />
				<link rel="stylesheet" href="css/welcome.css" />
				<link
					rel="icon"
					href="css/img/favicon.ico"
					type="image/icon type"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="css/footer.css" />
				<link
					rel="stylesheet"
					href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
				/>
				<link
					href="http://fonts.googleapis.com/css?family=Cookie"
					rel="stylesheet"
					type="text/css"
				/>
				<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
			</Helmet>

			<SlideShow />

			<br />
			<br />
			<br />
			<hr style={{ height: "6px" }} />
			<br />
			<br />
			<br />
			<br />
			<div id="mainContent">
				<div id="hotelAtlantis" className="hotelAtlantis">
					&nbsp;HOTEL ATLANTIS
				</div>
				<hr style={{ width: "45%" }} />
				<br />
				<div id="aboutUs">
					Glorious views of the crystal-clear waters of the Adriatic
					Sea come as standard in all of our five-star hotels and
					luxury villas. Alongside stunning seaside locations,
					effortlessly elegant interiors and impeccable service –
					including the assistance of our knowledgeable concierges –
					you can look forward to a stylish selection of destination
					bars and restaurants, luxury spas, boutiques, and even a
					PADI dive centre.
					<br />
					<br />
					<br />
					Our suites of contemporary conference centres are both
					impressive and flexible. Plush interior design, swathes of
					natural sunlight and picture – perfect panoramas of the sea
					make them just as popular a choice for weddings and other
					tailor-made events as for business. Book your holiday or
					event with us – and check our special offers – to experience
					the very best the Adriatic coast has to offer
					<br />
					<br />
					<br />
					Sublime seafront locations overlooking the Adriatic; a
					variety of state-of-the-art luxury venues; experienced
					event-planning and technical support teams – everything you
					need to host a superb, standout event in beautiful Dubrovnik
					is here, ready for you.
				</div>
				<br />
				<br />
			</div>
		</div>
	);
};

export default Welcome;
