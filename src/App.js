import Navbar from './frontend/Navbar'
import Footer from './frontend/Footer'

import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './frontend/Welcome'
import scrolling from './frontend/js/scrolling.js'
import Event from './frontend/Event'
import Contact from './frontend/Contact'
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
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
