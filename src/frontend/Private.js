import React from 'react'
import './css/private.css'

export default function Private() {
  return (
    <div className='private'>
      <div className='pparallax1'>
        <div className='poverlayText'>
          &nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <div className='pjustText'>Private Events</div>
        </div>
      </div>
      <div className='pmainContent'>
        <br />
        <h1>Private Events</h1>
        <br />
        Wanna throw a party to your friend and family? Or want to have a formal
        meeting with your new clients?
        <br />
        Don't Worry. We've got you covered.
        <br />
        <br />
      </div>
      <div className='pparallax2'>
        <br />
        <br />
        <br />
        <div className='pul1'>
          <h1>Parties ond other Events</h1>
        </div>
        <br />
        <div className='pwed'>
          We organise weddings and parties. <br />
          <br />
          You can count on us to throw the perfect party.
          <br />
          <br />
        </div>
        <div className='pproceed'>
          <a href='/private/informal' className='pa'>
            Click here to proceed &gt;&gt;
          </a>
        </div>
      </div>
      <div className='pkeepScrolling'>Keep Smiling and Scrolling.. :)</div>
      <div className='pparallax4'>
        <br />
        <div className='pul3'>
          <h1>Corporate Meetings</h1>
        </div>
        <br />
        <br />
        <div className='pmeet'>
          Wondering how you would present your business idea to investors here?
          <br />
          Want to formally meet with your teammates just like you did at oficce?
          <br />
          Don't worry we offer meeting space with all necessary presentation
          equipments.
          <br />
          <br />
        </div>
        <div className='pproceed'>
          <a href='/private/formal' className='pa'>
            Click here to proceed &gt;&gt;
          </a>
        </div>
        <br />
        <br />
      </div>
      <div className='pend'>
        <br />
        &nbsp;&nbsp;Couldn't find what you are looking for?
        <br />
        &nbsp;
        <div className='pcontact'>
          <a href='/contact' className='pa'>
            Click here to Contact Us &gt;&gt;
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}
