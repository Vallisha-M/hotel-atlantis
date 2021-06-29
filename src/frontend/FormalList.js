import React, { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import dateDiff from "./js/dateDiff"
const FormalList = () => {
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
  const [fevents, setFevents] = useState([])
  let history = useHistory()
  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = async () => {
    var params = {
      email: email_loc,
    }

    await axios
      .get("http://localhost:5500/formal/show_email", { params })
      .then((response) => {
        var r = response.data
        setFevents(r)
      })
      .catch((error) => console.log(error))
  }
  if (fevents.length == 0) {
    return (
      <div>
        <br />
        <h2>You have not made any reservations yet.</h2>
      </div>
    )
  } else {
    return (
      <div style={{ fontSize: "20px" }}>
        <table>
          <tr>
            <td>Guests</td>
            <td>Date</td>
          </tr>
          {fevents.map((fevent, index) => {
            return (
              <tr>
                <td>{fevent.guests}</td>
                <td>{fevent.date}</td>
                <td
                  onClick={async () => {
                    if (window.confirm("Are you sure?")) {
                      var flag = dateDiff(today, fevent.date)

                      if (flag) {
                        await axios
                          .post("http://localhost:5500/formal/cancel/", {
                            email: fevent.email,
                            date: fevent.date,
                            guests: fevent.guests,
                          })
                          .then((res) => {
                            if (res.data.done == 1)
                              history.push("/cancel/success")
                            else {
                              alert("ERROR")
                            }
                          })
                          .catch(() => alert("ERROR"))
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

export default FormalList