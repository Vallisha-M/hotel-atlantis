import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import './css/login.css'
import validateForm from './js/login.js'

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    validateForm()
  })
  return (
    <div>
      <Helmet>
        <title>Hotel Atlantis | Login</title>

        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link
          href='https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap'
          rel='stylesheet'
        />

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

        <link
          rel='stylesheet'
          href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
        />
        <link
          href='http://fonts.googleapis.com/css?family=Cookie'
          rel='stylesheet'
          type='text/css'
        />
      </Helmet>

      <body id='body'>
        <div className='overlay'>
          &nbsp;&nbsp;
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='main'>
            <div style={{ fontSize: '30px', paddingTop: '8px' }}>Login</div>
            <br />
            <form
              id='login'
              className='login'
              name='login'
              onSubmit='validateForm()'
              action='welcome.html'
              method='post'
            >
              <div style={{ fontSize: '18px' }}>
                E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='username@example.domain'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div id='fail1' />
              <br />
              <div style={{ fontSize: '18px' }}>
                Password :
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id='fail2' />
              <div style={{ paddingTop: '18px', paddingBottom: '9px' }}>
                <input type='submit' defaultValue='Login' />
              </div>
              <div id='signup'>
                Don't have an account?&nbsp;<a href='signup.html'>Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}
