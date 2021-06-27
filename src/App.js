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
          <Route exact path='/event'>
            <Event />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/signup/login'>
            <ProceedLogin></ProceedLogin>
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
          <Route path='*' component={NotFound} status={404} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
