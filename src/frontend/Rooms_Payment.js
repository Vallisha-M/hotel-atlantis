import "./css/rooms.css"
import "./css/scrolling.css"

import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Helmet } from "react-helmet"
import "./css/loading.css"
import $ from "jquery"
const Rooms_Payment = () => {
  let history = useHistory()
  if (
    localStorage.getItem("loggedIn") == null ||
    localStorage.getItem("loggedIn") == "false"
  ) {
    localStorage.setItem("proceed", "/rooms/confirm")
    history.push("/protect")
  }
  var cid = localStorage.getItem("cid")
  var cod = localStorage.getItem("cod")
  var amt = localStorage.getItem("amt")
  var numberofpeople = localStorage.getItem("numberofpeople")
  var roomtype = localStorage.getItem("roomtype")
  var email_loc = localStorage.getItem("email")
  const [user, setUser] = useState("")
  var name, email, resp

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    const params = {
      email: email_loc,
    }
    $(".loading").css("display", "block")
    await axios
      .get("http://localhost:5500/users/show", { params })
      .then((response) => {
        $(".loading").css("display", "none")
        setUser(response.data)
      })
      .catch((error) => {
        $(".loading").css("display", "none")
        console.log(error)
      })
  }

  async function check() {
    const room = {
      email: localStorage.getItem("email"),
      checkindate: cid,
      checkoutdate: cod,
      roomtype: roomtype,
      numberofpeople: numberofpeople,
      token: localStorage.getItem("token"),
    }
    $(".loading").css("display", "block")
    await axios
      .post("http://localhost:5500/rooms/add/", room)
      .then((response) => {
        $(".loading").css("display", "none")
        resp = response.data
      })
      .catch((error) => {
        $(".loading").css("display", "none")
        console.log(error)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await check().then(() => {
      if (resp.done == 1) {
        localStorage.removeItem("cid")
        localStorage.removeItem("cod")
        localStorage.removeItem("amt")
        localStorage.removeItem("roomtype")
        localStorage.removeItem("numberofpeople")
        history.push("/rooms/booked")
      } else alert("Error")
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
      <div class='loading' id='loading'>
        <img
          class='load'
          src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e472y9ys724kuop9ggv1bab9evw4ul8qodktgxzm8zs&rid=giphy.gif'
        />
      </div>
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
