import logo from './logo.svg'
import './App.css'
import Navbar from './frontend/Navbar'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className='App'>
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
      <Navbar></Navbar>
    </div>
  )
}

export default App
