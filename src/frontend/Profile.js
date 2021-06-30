import React, { useState, useEffect } from "react"
import "./css/events.css"
import axios from "axios"
import RoomList from "./RoomList"
import FormalList from "./FormalList"
import InformalList from "./InformalList"
import { useHistory } from "react-router-dom"
const Profile = () => {
  const [user, setUser] = useState("")
  var email_loc = localStorage.getItem("email")
  var name, email, phoneno
  let history = useHistory()
  useEffect(() => {
    getUserDetails()
  }, [])
  const logout = async () => {
    await axios
      .post("http://localhost:4000/logout", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        if (res.data.done == 1) {
          localStorage.removeItem("loggedIn")
          localStorage.removeItem("loginChanged")
          localStorage.removeItem("token")
          localStorage.removeItem("numberofpeople")
          localStorage.removeItem("roomtype")
          localStorage.removeItem("amt")
          localStorage.removeItem("cid")
          localStorage.removeItem("cod")
          localStorage.removeItem("email")
          history.push("/logout/success")
        } else {
          alert("Logout Unsuccessful")
        }
      })
      .catch((e) => {
        alert(e)
        alert("Logout Unsuccessful")
      })
  }
  const getUserDetails = async () => {
    const params = {
      email: email_loc,
      token: localStorage.getItem("token"),
    }
    await axios
      .get("http://localhost:5500/users/show", { params })
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        alert(error + "\nTry Re-logging in")
      })
  }

  if (typeof user[0] == "undefined") {
    name = ""
    email = ""
    phoneno = ""
  } else {
    name = user[0].firstName + " " + user[0].lastName
    email = user[0].email
    phoneno = user[0].phone
  }

  return (
    <div align='center'>
      <hr color='#ffc800' />
      <div className='main'>
        <div className='heading' style={{ width: "200px" }}>
          <br />
          <br />
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                logout()
              }
            }}
            className='changepass'
            style={{ position: "relative", left: "500px" }}
          >
            Logout
          </button>
          <br />
          User Details
        </div>
        <br />
        {/* User */}
        <div style={{ fontSize: "20px" }}>
          Name: <span>{name}</span>
          <br />
          <br />
          Email ID: <span>{email}</span>&nbsp;&nbsp;
          <a href='changepassword'>
            <button className='changepass'>Change password</button>
          </a>
          <br />
          <br />
          Mobile number: <span>{phoneno}</span>
          <br />
          <br />
        </div>
        {/* Rooms */}
        <div style={{ fontSize: "20px" }}>
          <div className='heading' style={{ width: "250px" }}>
            <br />
            Room Bookings
          </div>
          <RoomList />
        </div>
        {/* Formal Events */}
        <div style={{ fontSize: "20px" }}>
          <div className='heading' style={{ width: "250px" }}>
            <br />
            Formal Events
          </div>
          <FormalList />
        </div>
        {/* Informal Events */}
        <div style={{ fontSize: "20px" }}>
          <div className='heading' style={{ width: "250px" }}>
            <br />
            Informal Events
          </div>
          <InformalList />
        </div>
      </div>
    </div>
  )
}

export default Profile
