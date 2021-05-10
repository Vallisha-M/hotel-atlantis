import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventTimeLine from './EventTimeLine.js'
export default function EventList() {
  const [events, getEvents] = useState('')
  //const url = 'http:localhost:5500/event'
  useEffect(() => {
    getAllEvents()
  }, [])

  const getAllEvents = () => {
    axios({
      method: 'get',
      url: 'http://localhost:5500/event/',
    })
      .then((response) => {
        console.log(response)
        const allEvents = response.data
        getEvents(allEvents)
      })
      .catch((error) => console.log('hello' + error))
  }
  return <EventTimeLine events={events} />
}
