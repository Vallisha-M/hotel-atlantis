import React from 'react'

import './css/notFound.css'
export default function example() {
  // localStorage.setItem(
  //   'refreshToken',
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbGxpc2hhQGdtYWlsLmNvbSIsImlhdCI6MTYyMjI3NDE1N30.4oiXsRvkPXBgCw1JUEhwnZ5vVr0rOHQ-oSVn53vkYys'
  // )
  // localStorage.setItem('loggedIn', true)
  // localStorage.setItem('loginChanged', false)
  return (
    <div className='notFound'>
      <div className='wrap'>
        <div className='text'>
          <div className='four'>404 </div>
          <br />
          We couldn't find what you were looking for.
          <br />
          <br />
          <a className='a' href='/'>
            back to home
          </a>
        </div>
      </div>
    </div>
  )
}
