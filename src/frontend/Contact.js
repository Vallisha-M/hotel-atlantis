import React from "react"
import "./css/contact.css"
export default function Contact() {
  return (
    <div>
      <div className='parallax1-contact'>
        <div className='overlayText-contact'>
          <div className='justText-contact'>Contact Us</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr color='#ffc800' />
      <div className='main'>
        <div className='heading'>
          <br />
          Contact Us
        </div>
        <br />
        <div style={{ fontSize: "20px" }}>
          Here are our contact details ;<br />
          <br />
          Phone : +91 22-27782183 <br />
          <br />
          Mail :{" "}
          <a
            style={{ textDecoration: "none", color: "#ffca00" }}
            href='mailto:hotelatlantisproject@gmail.com'
          >
            hotelatlantisproject@gmail.com
          </a>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
