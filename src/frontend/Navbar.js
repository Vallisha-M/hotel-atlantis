import React, { useState } from "react"
import "./css/style.css"
import logo from "./css/img/logo1.png"
import "./css/welcome1.css"

function Navbar() {
  const [state, setState] = useState({ link: "/login", name: "Login" })
  const [loginChanged, setLoginChanged] = useState(() => {
    if (localStorage.getItem("loginChanged") == null) return Boolean(false)
    return Boolean(localStorage.getItem("loginChanged"))
  })
  const [loggedIn, setLoggedIn] = useState(() => {
    if (Boolean(localStorage.getItem("loggedIn")) == null) return false
    return Boolean(localStorage.getItem("loggedIn"))
  })
  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken")
  })
  function alterState(log) {
    setState(() => {
      if (log == true) return { link: "/profile", name: "Profile" }
      else return { link: "/login", name: "Login" }
    })
  }
  function falseLoginChanged() {
    setLoginChanged(() => {
      return Boolean(false)
    })
  }
  function trueLoginChanged() {
    setLoginChanged(() => {
      return Boolean(true)
    })
  }

  const link = state.link
  const name = state.name

  if (refreshToken != null && refreshToken.length > 10) {
    if (loginChanged == true) {
      localStorage.setItem("loginChanged", false)
      falseLoginChanged()
      if (loggedIn == true) alterState(true)
      else alterState(false)
    }
  }
  return (
    <div className='navbar' id='navbar'>
      <hr style={{ width: "100%", height: "2px" }} />
      <a href='/' className='img'>
        <img
          src={logo}
          alt='Home'
          title='Home'
          style={{ width: "118px", height: "52px", float: "left" }}
        />
      </a>
      <a href={link} className='button1' style={{ width: "100px" }}>
        <span>{name}</span>
      </a>
      <a href='/rooms' className='button1' style={{ width: "140px" }}>
        <span>Book a Room</span>
      </a>
      <a href='/contact' className='button1' style={{ width: "110px" }}>
        <span>Contact Us</span>
      </a>
      <a href='/dining' className='button2' style={{ width: "70px" }}>
        <span>Dining</span>
      </a>
      <a href='/feedback' className='button1' style={{ width: "100px" }}>
        <span>Feedback</span>
      </a>
      <a href='/event' className='button2' style={{ width: "70px" }}>
        <span>Events</span>
      </a>
      <a href='/private' className='button1' style={{ width: "130px" }}>
        <span>Private Events</span>
      </a>
      <a href='/gallery' className='button2' style={{ width: "100px" }}>
        <span>Gallery</span>
      </a>

      <hr style={{ width: "100%", height: "2px" }} />
    </div>
  )
}

export default Navbar
