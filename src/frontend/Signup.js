import './css/signup.css'

import { Helmet } from 'react-helmet'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  var pass1, email, pass2, fname, lname, pno

  var res = { isAllowed: false },
    url_var = '/'
  let history = useHistory()

  async function check() {
    const params = {
      email: email,
      password: pass,
      lastName: lname,
      firstName: fname,
      p,
    }

    var flag = false
    await axios

      .post('http://localhost:4000/login', params)
      .then((response) => {
        res = response.data
        console.log('frontend')
        console.log(res)
        flag = Boolean(res.isAllowed)
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
    console.log(flag)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await check().then(() => {
      var patt =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

      var result = email.match(patt)
      var spaceFlag = true
      if (result != null) spaceFlag = true ? result.indexOf(' ') > -1 : false

      if (spaceFlag || result == null) {
        url_var = '/unvailablelogin'
      }

      if (
        (res.isAllowed != null && res.isAllowed == false) ||
        res.isAllowed == null
      )
        url_var = '/unvailablelogin'
      {
        if (pass == '') {
          url_var = '/unvailablelogin'
        }
      }
      if (url_var === '/') {
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('loggedIn', res.isAllowed)
      }
      console.log(res.isAllowed)
      console.log(url_var)
      history.push(url_var)
    })
  }

  return (
    <div>
      <Helmet>
        <title>Hotel Atlantis | Signup</title>

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

      <div class='overlay'>
        &nbsp;&nbsp;
        <br />
        <div class='main'>
          <div style='font-size: 30px; padding-top: 8px'>Sign Up</div>
          <br />
          <form id='login' class='login' name='login' onsubmit={handleSubmit}>
            <div style='font-size: 18px; padding-left: 10px'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              First Name :
              <input
                type='text'
                id='fname'
                name='fname'
                placeholder='First Name'
                onChange={(e) => (fname = e.target.value)}
                required
              />
              <div id='fail1'></div>
            </div>
            <br />
            <div style='font-size: 18px; padding-left: 10px'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Last Name :
              <input
                type='text'
                id='lname'
                name='lname'
                placeholder='Last Name'
                onChange={(e) => (lname = e.target.value)}
                required
              />
              <div id='fail2'></div>
            </div>
            <br />
            <div style='font-size: 18px; padding-left: 10px'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail
              :
              <input
                type='text'
                id='email'
                name='email'
                placeholder='username@example.domain'
                onChange={(e) => (email = e.target.value)}
                required
              />
            </div>

            <div id='fail3'></div>
            <br />
            <div style='font-size: 18px; padding-left: 10px'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Phone :
              <input
                type='text'
                id='pno'
                name='pno'
                placeholder='Phone Number'
                onChange={(e) => (pno = e.target.value)}
                required
              />
            </div>

            <div id='fail6'></div>
            <br />
            <div style='font-size: 18px'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
              :
              <input
                type='password'
                id='password'
                name='pass'
                placeholder='Password'
                onChange={(e) => (pass1 = e.target.value)}
                required
              />
            </div>
            <div id='fail4'></div>
            <br />
            <div style='font-size: 18px; padding-left: 10px'>
              Confirm Password :
              <input
                type='password'
                id='confirm'
                name='confirm'
                placeholder='Confirm Password'
                onChange={(e) => (pass2 = e.target.value)}
                required
              />
              <div id='fail5'></div>
            </div>
            <div style='padding-top: 18px; padding-bottom: 9px'>
              <input type='submit' value='SignUp' />
            </div>
            <div id='login'>
              Have an account?&nbsp;<a href='login.html'>Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
