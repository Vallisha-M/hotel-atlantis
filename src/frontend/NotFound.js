import React from "react"

import "./css/notFound.css"
export default function example() {
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
