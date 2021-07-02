import React, { useState, useEffect } from "react"
import axios from "axios"
import { getEventListener } from "events"
import { useHistory } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import dateDiff from "./js/dateDiff"
import "./css/loading.css"
import $ from "jquery"
const InformalList = () => {
  var today = new Date()

  var dd = today.getDate()
  var mm = today.getMonth() + 1

  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = "0" + dd
  }
  if (mm < 10) {
    mm = "0" + mm
  }
  today = yyyy + "-" + mm + "-" + dd
  var email_loc = localStorage.getItem("email")
  const [ievents, setIevents] = useState([])
  let history = useHistory()
  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = async () => {
    var params = {
      email: email_loc,
      token: localStorage.getItem("token"),
    }
    $(".loading").css("display", "block")
    await axios
      .get("http://localhost:5500/informal/show_email", { params })
      .then((response) => {
        $(".loading").css("display", "none")
        var r = response.data
        setIevents(r)
      })
      .catch((error) => {
        console.log(error)
        $(".loading").css("display", "none")
      })
  }
  if (ievents.length == 0) {
    return (
      <div>
        <br />
        (You have not made any reservations yet.)
      </div>
    )
  } else {
    return (
      <div style={{ fontSize: "20px" }}>
        <div class='loading' id='loading'>
          <img
            class='load'
            src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e472y9ys724kuop9ggv1bab9evw4ul8qodktgxzm8zs&rid=giphy.gif'
          />
        </div>
        <table>
          <tr style={{ fontWeight: "bold" }}>
            <td>Venue</td>
            <td>Event Type</td>
            <td>Guests</td>
            <td>Date</td>
          </tr>
          {ievents.map((ievent, index) => {
            return (
              <tr>
                <td>{ievent.venue}</td>
                <td>{ievent.adjective}</td>
                <td>{ievent.guests}</td>
                <td>{ievent.date}</td>
                <td
                  onClick={async () => {
                    console.log(ievent.date)
                    console.log(ievent.email)
                    if (window.confirm("Are you sure?")) {
                      var flag = dateDiff(today, ievent.date)

                      if (flag) {
                        $(".loading").css("display", "block")
                        await axios
                          .post("http://localhost:5500/informal/cancel/", {
                            email: ievent.email,
                            date: ievent.date,
                            guests: ievent.guests,
                            eventType: ievent.adjective,
                            venue: ievent.venue,
                            token: localStorage.getItem("token"),
                          })
                          .then((res) => {
                            $(".loading").css("display", "none")
                            if (res.data.done == 1)
                              history.push("/cancel/success")
                            else {
                              alert("ERROR")
                            }
                          })
                          .catch((e) => {
                            $(".loading").css("display", "none")
                            alert(e + "\nTry Re-logging in")
                          })
                      } else {
                        alert("Cannot cancel when less than 2 days remain")
                      }
                    } else {
                      console.log("Not cancelled")
                    }
                  }}
                >
                  <IconButton aria-label='delete' color='secondary'>
                    <div style={{ fontSize: "20px" }}>Cancel </div>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default InformalList
