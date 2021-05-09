import logo from './logo.svg'
import './App.css'
//import Navbar from './frontend/Navbar'
import { Helmet } from 'react-helmet'
import Welcome from './frontend/Welcome'
import scrolling from './frontend/js/scrolling.js'
function App() {
  return (
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
        ></link>
      </Helmet>
      <Welcome />
    </div>
  )
}

export default App
