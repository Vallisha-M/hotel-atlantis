import react from 'react'
import './css/style.css'
import './css/welcome.css'
import './css/footer.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import SlideShow from './SlideShow'
import scrolling from './js/scrolling.js'
function Welcome() {
  return (
    <div onScroll={scrolling}>
      <Helmet>
        <script src='js/scrolling.js'></script>
        <title>Hotel Atlantis | Welcome</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'></meta>
        <meta name='keywords' content='footer, address, phone, icons' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='css/style.css' />
        <link rel='stylesheet' href='../css/welcome.css' />
        <link rel='icon' href='css/img/favicon.ico' type='image/icon type' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap'
          rel='stylesheet'
        />

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

        <link
          rel='stylesheet'
          href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
        />

        <link
          href='http://fonts.googleapis.com/css?family=Cookie'
          rel='stylesheet'
          type='text/css'
        ></link>

        <script src='http://code.jquery.com/jquery-1.9.1.min.js'></script>
        <script src='./js/scrolling.js'></script>
      </Helmet>
      <Navbar></Navbar>
      <SlideShow />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Welcome
