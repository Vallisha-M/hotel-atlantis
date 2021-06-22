import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./frontend/Navbar";
import Welcome from "./frontend/Welcome";
import scrolling from "./frontend/js/scrolling";
import Event from "./frontend/Event";
import Contact from "./frontend/Contact";
import Footer from "./frontend/Footer";
import SlideShow from "./frontend/SlideShow";
import Rooms from "./frontend/Rooms";
import Rooms_Payment from "./frontend/Rooms_Payment";
import AlertDialogSlide from "./frontend/AlertDialogSlide";
import AlertDialogSlide1 from "./frontend/AlertDialogSlide1";
import NotFound from "./frontend/NotFound";
import Login from "./frontend/Login";
import Gallery from "./frontend/Gallery";
import { filterSelection } from "./frontend/js/gallery_filter";

function App() {
	return (
		<Router>
			<div className="App" onScroll={scrolling}>
				<Helmet>
					<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
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
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route exact path="/event">
						<Event />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/rooms">
						<Rooms />
					</Route>
					<Route exact path="/rooms/confirm">
						<Rooms_Payment />
					</Route>
					<Route exact path="/rooms/error">
						<Rooms />
						<AlertDialogSlide />
					</Route>
					<Route exact path="/rooms/unavailable">
						<Rooms />
						<AlertDialogSlide1 />
					</Route>
					<Route exact path="/login" component={Login} />
					<Route exact path="/gallery" component={Gallery} />
					<Route path="*" component={NotFound} status={404} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
