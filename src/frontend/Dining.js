import React from "react"
import "./css/dining.css"
import { useHistory } from "react-router-dom"
import axios from "axios"
import $ from "jquery"
import load from "./img/loading.gif"
import conti from "./img/continental.jpg"
import indian from "./img/indian restaurant.jpg"
import bakel from "./img/cakeshop.jpg"
import { Helmet } from "react-helmet"
export default function Dining() {
  let history = useHistory()

  if (
    localStorage.getItem("loggedIn") == null ||
    localStorage.getItem("loggedIn") == "false"
  ) {
    localStorage.setItem("proceed", "/dining")
    history.push("/protect")
  }
  var today = new Date()
  var email = localStorage.getItem("email")
  var checkin, seats, time, type
  var res = { isAllowed: false }

  async function check() {
    const params = {
      email: localStorage.getItem("email"),
      checkin: checkin.toString().slice(0, 10),
      seats: seats,
      time: time,
      token: localStorage.getItem("token"),
    }
    $(".loading").css("display", "block")
    await axios

      .post("http://localhost:5500/indian/add/", params)
      .then((response) => {
        $(".loading").css("display", "none")
        res = response.data
        console.log(res)
      })
      .catch((error) => {
        $(".loading").css("display", "none")
        alert(error)
        console.log(error)
      })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    var flag = true
    res = { is: "a" }

    if (checkin == undefined) {
      alert("Select a Date")
      flag = false
      return
    }

    var dd = parseInt(String(today.getDate()).padStart(2, "0"))
    var mm = parseInt(String(today.getMonth() + 1).padStart(2, "0")) //January is 0
    if (checkin == undefined) checkin = today
    var yyyy = parseInt(today.getFullYear())
    var yyyy1 = parseInt(checkin.toString().slice(0, 4))
    var mm1 = parseInt(checkin.toString().slice(5, 7))
    var dd1 = parseInt(checkin.toString().slice(8, 10))
    var valueToday = dd + mm * 30 + yyyy * 365
    var valueSelected = dd1 + mm1 * 30 + yyyy1 * 365

    if (valueToday > valueSelected) {
      alert("Enter correct date")
      flag = false
      return
    }

    if (seats == undefined) {
      alert("Select seats")
      flag = false
      return
    }

    if (time == undefined) {
      alert("Select a Time")
      flag = false
      return
    }
    if (type == undefined) {
      alert("Select booking type")
      flag = false
      return
    }

    if (flag)
      await check().then(() => {
        if (res.duplicate == 1) alert("Slot taken, Try another date ")
        if (res.done == 1) {
          localStorage.setItem("checkinpre", checkin)
          localStorage.setItem("seatspre", seats)
          localStorage.setItem("timepre", time)
          if (type == "pre order")
            window.location.replace("http://localhost:3000/dining/indian")
          if (type == "reserve table")
            window.location.replace("http://localhost:3000/dining/confirm")
        }
      })
  }

  return (
    <div>
      <div class='loading' id='loading'>
        <img class='load' src={load} />
      </div>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      </Helmet>

      <div>
        <div className='parallax1-d' id='top'>
          <div className='overlayText-d' align='center'>
            &nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <div className='justText-d' align='center'>
              Dining
            </div>
          </div>
        </div>
        <div className='mainContent-d'>
          <h2>Dining</h2>
          <br />
          <br />
          In our bid to deliver authentic, undiluted experiences, we’ve
          introduced a unique regional home style dining experience. Always
          prepared with a local touch, the home-style cooking ensures that you
          maintain good health throughout your stay. And at the same time it
          gives you the opportunity to dabble in the local delicacies.
          <br />
          <br />
          <h2>Our Restaurants</h2>
          <br />
          <br />
          <div className='cardlist-d'>
            <div className='card-d'>
              <a href='#down-d'>
                <img
                  id='rimage-d'
                  src={indian}
                  alt='INDIAN PALACE'
                  style={{ width: "100%" }}
                />
                <h4>INDIAN PALACE</h4>
                <p id='details-d'>
                  Treat your taste buds to a truly unique, contemporary Indian
                  cuisine at this elegant restaurant.
                </p>
              </a>
              <a
                href='gallery'
                className='button3-d'
                style={{ width: "100px" }}
              >
                <span>View Images</span>
              </a>
            </div>
            <div className='card-d'>
              <a href='#down-d'>
                <img
                  id='rimage-d'
                  src={conti}
                  alt='BLUE GINGER'
                  style={{ width: "100%" }}
                />
                <h4>BLUE GINGER</h4>
                <p id='details-d'>
                  Blue ginger, world's finest Continental restaurant is an
                  exquisite celebration of its vibrant food, colour and life.
                </p>
              </a>{" "}
              <a
                href='gallery'
                className='button3-d'
                style={{ width: "100px" }}
              >
                <span>View Images</span>
              </a>
            </div>
            <div className='card-d'>
              <a href='#down-d'>
                <img
                  id='rimage-d'
                  src={bakel}
                  alt='Bake Love'
                  style={{ width: "100%" }}
                />
                <h4>BAKE LOVE</h4>
                <p id='details-d'>
                  Bake Love, the pastry shop tempts the inveterate sweet tooth
                  with its enviable range of goodies.
                </p>
              </a>{" "}
              <a
                href='gallery'
                className='button3-d'
                style={{ width: "100px" }}
              >
                <span>View Images</span>
              </a>
            </div>
          </div>
          <div id='down-d'>
            <br />
            <h2>Reservation</h2>
            <br />
            <div id='back'>
              <div id='form-table-d'>
                <div
                  id='center'
                  style={{
                    padding: "30px",
                    "font-family": "oxygen",
                    "font-size": "20px",
                  }}
                >
                  <form name='booking' id='booking' onSubmit={handleSubmit}>
                    <p style={{ display: "table-row" }}>
                      {" "}
                      <label>Check-in: </label>
                      <input
                        type='date'
                        name='checkin'
                        required
                        style={{ width: "135px" }}
                        onChange={(e) => {
                          checkin = e.target.value
                        }}
                      />
                    </p>
                    <br />
                    <p style={{ display: "table-row" }} />{" "}
                    <label htmlFor='seats'>Seats:</label>
                    <select
                      name='seats'
                      id='seats'
                      required
                      style={{ width: "145px" }}
                      onChange={(e) => {
                        seats = e.target.value
                      }}
                    >
                      <option value selected disabled hidden>
                        Choose time
                      </option>
                      <option>1-5</option>
                      <option>5-10</option>
                      <option v>10-30</option>
                      <option>30-50</option>
                      <option>50+</option>
                    </select>
                    <p />
                    <br />
                    <span id='demo' />
                    <p style={{ display: "table-row" }} />{" "}
                    <label htmlFor='time'>Time:</label>
                    <select
                      name='time'
                      id='time'
                      required
                      style={{ width: "145px" }}
                      onChange={(e) => {
                        time = e.target.value
                      }}
                    >
                      <option value selected disabled hidden>
                        Choose time
                      </option>
                      <option>09AM-10AM</option>
                      <option>11AM-02PM</option>
                      <option>03PM-07PM</option>
                      <option>08PM-11PM</option>
                    </select>
                    <p />
                    <br />
                    <p style={{ display: "table-row" }} />{" "}
                    <label htmlFor='type'>Booking:</label>
                    <select
                      name='time'
                      id='time'
                      required
                      style={{ width: "145px" }}
                      onChange={(e) => {
                        type = e.target.value
                      }}
                    >
                      <option value selected disabled hidden>
                        Choose type
                      </option>
                      <option>reserve table</option>
                      <option>pre order</option>
                    </select>
                    <p />
                    <br />
                    <div className='submitbtns' style={{ "margin-top": "0px" }}>
                      {" "}
                      <p style={{ display: "table-row" }}>
                        <input
                          type='submit'
                          id='submitbtn-d'
                          value='Proceed'
                          style={{
                            "background-color": "#ffc800",
                            border: "none",
                            color: "white",
                            padding: "10px 20px",
                            "-webkit-text-align": "center",
                            "text-align": "center",
                            "-webkit-text-decoration": "none",
                            "text-decoration": "none",
                            "font-size": "16px",
                            "border-radius": "7px",
                          }}
                        />
                        &nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
