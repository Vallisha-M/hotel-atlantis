import React from 'react'
import EventList from './EventList'
import './css/events.css'
export default function Event() {
  // localStorage.removeItem('refreshToken')
  // localStorage.setItem('loggedIn', false)
  // localStorage.setItem('loginChanged', true)
  return (
    <div>
      <div class='parallax1-event'>
        <div class='overlayText-event'>
          <div class='justText-event'>Events</div>
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
          <EventList />
        </table>
      </div>
    </div>
  )
}
