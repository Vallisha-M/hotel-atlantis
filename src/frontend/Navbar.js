import react from 'react'
import './css/style.css'
import logo from './css/img/logo1.png'
import './css/welcome1.css'
import { Helmet } from 'react-helmet'
function Navbar() {
  return (
    <div className='navbar' id='navbar'>
      <Helmet>
        <script src='./js/scrolling.js'></script>
      </Helmet>
      <hr style={{ width: '100%', height: '2px' }} />
      <a href className='img'>
        <img
          src={logo}
          alt='Home'
          title='Home'
          style={{ width: '118px', height: '52px', float: 'left' }}
        />
      </a>
      <a href className='button1' style={{ width: '140px' }}>
        <span>Book a Room</span>
      </a>
      <a href className='button1' style={{ width: '110px' }}>
        <span>Contact Us</span>
      </a>
      <a href className='button2' style={{ width: '70px' }}>
        <span>Dining</span>
      </a>
      <a href className='button2' style={{ width: '70px' }}>
        <span>Events</span>
      </a>
      <a href className='button1' style={{ width: '130px' }}>
        <span>Private Events</span>
      </a>
      <a href className='button2' style={{ width: '100px' }}>
        <span>Gallery</span>
      </a>
      <hr style={{ width: '100%', height: '2px' }} />
    </div>
  )
}

export default Navbar
