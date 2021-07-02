import React, { useEffect, useState } from "react"
import axios from "axios"
import EventTimeLine from "./EventTimeLine.js"
import "./css/loading.css"
import $ from "jquery"
export default function EventList() {
  const [events, getEvents] = useState("")

  useEffect(() => {
    getAllEvents()
  }, [])

  const getAllEvents = () => {
    $(".loading").css("display", "block")
    axios({
      method: "get",
      url: "http://localhost:5500/event/",
    })
      .then((response) => {
        $(".loading").css("display", "none")
        const allEvents = response.data
        getEvents(allEvents)
      })
      .catch((error) => {
        $(".loading").css("display", "none")
        console.log(error)
      })
  }
  return (
    <div>
      <div class='loading' id='loading'>
        <img
          class='load'
          src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e472y9ys724kuop9ggv1bab9evw4ul8qodktgxzm8zs&rid=giphy.gif'
        />
      </div>
      <EventTimeLine events={events} />
    </div>
  )
}
