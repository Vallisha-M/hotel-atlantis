import React from 'react'
import EventList from './EventList'
import './css/events.css'
export default function Event() {
  return (
    <div>
      <div class='parallax1'>
        <div class='overlayText'>
          <div class='justText'>Events</div>
        </div>
      </div>
      <hr color='#ffc800' />
      <div className='main'>
        <div className='heading'>
          <br />
          Events
        </div>
        <br />
        <div style={{ fontSize: '20px' }}>
          Every week we host a variety of celebrity performance <br />
          <br />
          Here's the list of upcoming events.
          <br />
          <br />
        </div>
        <table>
          <tr>
            <td>
              <b>Event Type</b>
            </td>
            <td>
              <b>Performer</b>
            </td>
            <td>
              <b>Date</b>
            </td>
            <td>
              <b>Time</b>
            </td>
          </tr>
          <EventList />
        </table>
      </div>
    </div>
  )
}
