import "./css/rooms.css"
import "./css/scrolling.css"

import React, { useState, useEffect } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"

const Rooms_Payment = () => {
  var cid = localStorage.getItem("cid")
  var cod = localStorage.getItem("cod")
  var amt = localStorage.getItem("amt")
  var numberofpeople = localStorage.getItem("numberofpeople")
  var roomtype = localStorage.getItem("roomtype")
  var email_loc = localStorage.getItem("email")
  const [user, setUser] = useState("")
  var name, email

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    const params = {
      email: email_loc,
    }
    await axios
      .get("http://localhost:5500/users/show", { params })
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSubmit = () => {
    const room = {
      email: localStorage.getItem("email"),
      checkindate: cid,
      checkoutdate: cod,
      roomtype: roomtype,
      numberofpeople: numberofpeople,
    }
    axios
      .post("http://localhost:5500/rooms/add/", room)
      .then(() => {
        console.log("Room added")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (typeof user[0] == "undefined") {
    name = ""
    email = ""
  } else {
    name = user[0].firstName + " " + user[0].lastName
    email = user[0].email
  }

  return (
    <div>
      <Helmet>
        <link rel='stylesheet' href='css/rooms.css' />
        <link rel='stylesheet' href='css/welcome.css' />
      </Helmet>
      <div
        align='center'
        style={{
          fontFamily: "oxygen",
          marginLeft: "480px",
          maxWidth: "600px",
          paddingTop: "60px",
        }}
      >
        <h2>Rooms are available as per your choice</h2>
        <br />
        <h3>Confirm your details</h3>
        <br />
        <hr />
        <p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
          Name: {name}
        </p>
        <hr />
        <p style={{ padding: "10px" }}>Email: {email}</p>
        <hr />
        <p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
          Check-in date: <span id='Check_in'>{cid}</span>
        </p>
        <hr />
        <p style={{ padding: "10px" }}>
          Check-out date: <span id='Check_out'>{cod}</span>
        </p>
        <hr />
        <p style={{ backgroundColor: "#DCDCDC", padding: "10px" }}>
          Amount payable ($) : <span id='amount'>{amt}</span>
        </p>
        <hr />
      </div>
      <br />
      <br />
      <div className='center' align='center'>
        <form name='Payment' action='' onSubmit={handleSubmit}>
          <p style={{ display: "table-row" }}>
            <label>Card Number:</label>
            <input
              type='number'
              name='cardnumber'
              min='1000000000000000'
              max='9999999999999999'
              required
            />
            &nbsp;
            <span id='cardno' />
            <br />
            <br />
          </p>
          <p style={{ display: "table-row" }}>
            <label>Card type:</label>
            Debit{" "}
            <input type='radio' name='card' defaultValue='debit' required />
            Credit{" "}
            <input type='radio' name='card' defaultValue='credit' required />
            <br />
            <br />
          </p>
          <p style={{ display: "table-row" }}>
            <label>CVV:</label>
            <input type='number' name='cvv' required min='000' max='999' />
            <br />
            <br />
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='submit'
            value='Confirm Payment'
            id='submitBtn'
            className='button'
            style={{
              width: "200px",
              height: "30px",
            }}
          />
        </form>
        <br />
      </div>
    </div>
  )
}

export default Rooms_Payment
