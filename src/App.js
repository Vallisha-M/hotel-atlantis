import Navbar from "./frontend/Navbar"
import Footer from "./frontend/Footer"
import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Welcome from "./frontend/Welcome"
import scrolling from "./frontend/js/scrolling.js"
import Event from "./frontend/Event"
import Contact from "./frontend/Contact"
import NotFound from "./frontend/NotFound"
import Login from "./frontend/Login"
import Signup from "./frontend/Signup"
import ProceedLogin from "./frontend/ProceedLogin"
import Informal from "./frontend/Informal"
import Formal from "./frontend/Formal"
import EventAdded from "./frontend/EventAdded"
import Private from "./frontend/Private"
import Feedback from "./frontend/Feedback"
import FeedbackConfirm from "./frontend/FeedbackConfirm"
import LoginSuccess from "./frontend/LoginSuccess"
import Gallery from "./frontend/Gallery"
import Rooms from "./frontend/Rooms"
import Profile from "./frontend/Profile"
import Rooms_Payment from "./frontend/Rooms_Payment"
import AlertDialogSlide from "./frontend/AlertDialogSlide"
import AlertDialogSlide1 from "./frontend/AlertDialogSlide1"
import CancelSuccess from "./frontend/CancelSuccess"
import Forgot from "./frontend/Forgot"
import PassChangeConfirm from "./frontend/PassChangeConfirm"
import ChangePassword from "./frontend/ChangePassword"
import ForgotSuccess from "./frontend/ForgotSuccess"
import RoomBooked from "./frontend/RoomBooked"
import LogoutSuccess from "./frontend/LogoutSuccess"
import ProtectAlert from "./frontend/ProtectAlert"
function App() {
  return (
    <Router>
      <div className='App' onScroll={scrolling}>
        <Helmet>
          <script src='http://code.jquery.com/jquery-1.9.1.min.js'></script>

          <link
            rel='stylesheet'
            href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
          />

          <link
            href='http://fonts.googleapis.com/css?family=Cookie'
            rel='stylesheet'
            type='text/css'
          />
        </Helmet>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route exact path='/changepassword'>
            <ChangePassword />
          </Route>
          <Route exact path='/forgot/success'>
            <ForgotSuccess />
          </Route>
          <Route exact path='/event'>
            <Event />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/logout/success'>
            <LogoutSuccess />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/signup/login'>
            <ProceedLogin />
          </Route>
          <Route exact path='/forgot'>
            <Forgot />
          </Route>
          <Route exact path='/private/informal'>
            <Informal />
          </Route>
          <Route exact path='/private/formal'>
            <Formal />
          </Route>
          <Route exact path='/feedback/confirm'>
            <FeedbackConfirm />
          </Route>
          <Route exact path='/private/confirm'>
            <EventAdded />
          </Route>
          <Route exact path='/private'>
            <Private />
          </Route>
          <Route exact path='/feedback'>
            <Feedback />
          </Route>
          <Route exact path='/login/success'>
            <LoginSuccess />
          </Route>
          <Route exact path='/rooms'>
            <Rooms />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/rooms/confirm'>
            <Rooms_Payment />
          </Route>
          <Route exact path='/rooms/error'>
            <Rooms />
            <AlertDialogSlide />
          </Route>
          <Route exact path='/protect'>
            <ProtectAlert />
          </Route>
          <Route exact path='/rooms/booked'>
            <RoomBooked />
          </Route>
          <Route exact path='/passchange/success'>
            <PassChangeConfirm />
          </Route>
          <Route exact path='/rooms/unavailable'>
            <Rooms />
            <AlertDialogSlide1 />
          </Route>
          <Route exact path='/cancel/success'>
            <CancelSuccess />
          </Route>
          <Route exact path='/gallery' component={Gallery} />
          <Route path='*' component={NotFound} status={404} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
