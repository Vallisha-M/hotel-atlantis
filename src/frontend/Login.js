import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import $ from 'jquery'
import './css/login.css'
import axios from 'axios'
export default function Login() {
  // const [fail1, setFail1] = useState()
  const [res, setRes] = useState(() => {
    return { isAllowed: false }
  })

  // function echangeUrl() {
  //   setUrl((flag) => {
  //     if (flag) return '/loginConfirm'
  //   })
  // }
  // function actionHandler() {
  //   if (Boolean(localStorage.getItem('loggedIn')))
  //     return 'http://localhost:3000/'
  // }

  function handleSubmit(event) {
    var errors = 0
    var height = 285
    var flag = true
    var str = document.forms['login']['email'].value
    var patt =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    var result = str.match(patt)
    str = str.trim()
    var spaceFlag = true ? str.indexOf(' ') > -1 : false
    {
      if (spaceFlag || result == null) {
        flag = false
        errors = errors + 1
        $('#email').css('border-color', 'red')
        $('#email').css('background-color', 'rgba(255,0,0,0.3)')
        document.getElementById('fail1').innerHTML =
          'Enter a valid email address'
      } else {
        $('#email').css('border-color', 'green')
        $('#email').css('background-color', 'white')
        document.getElementById('fail1').innerHTML = null
      }
    }
    var pass = document.forms['login']['password'].value
    {
      if (pass == '') {
        $('#password').css('border-color', 'red')
        $('#password').css('background-color', 'rgba(255,0,0,0.3)')
        errors = errors + 1
        flag = false
        document.getElementById('fail2').innerHTML = 'Enter the password'
      } else {
        $('#password').css('border-color', 'green')
        $('#password').css('background-color', 'white')
        document.getElementById('fail2').innerHTML = null
      }
    }

    if (flag) {
      axios
        .post('http://localhost:4000/login', {
          email: str,
          password: pass,
        })
        .then((resq) => {
          console.log(resq.data)
          setRes(() => {
            return { ...resq.data }
          })
        })
        .catch(() => {
          event.preventDefault()
        })

      if (res.isAllowed == true) {
        localStorage.setItem('loginChanged', true)
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('accessToken', res.accessToken)
        //changeUrl(true)
      } else {
        errors = errors + 1
        $('#password').css('border-color', 'red')
        $('#password').css('background-color', 'rgba(255,0,0,0.3)')
        $('#email').css('border-color', 'red')
        $('#email').css('background-color', 'rgba(255,0,0,0.3)')
        document.getElementById('fail2').innerHTML =
          'password or email is invalid'
        event.preventDefault()
      }
    } else event.preventDefault()
    height = height + errors * 25
    height = height.toString() + 'px'
    $('.main').css('height', height)
  }
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
              onSubmit={handleSubmit}
              action={'http://localhost:3000/'}
            >
              <div style={{ fontSize: '18px' }}>
                E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='username@example.domain'
                  required
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
