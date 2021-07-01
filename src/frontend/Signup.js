import "./css/signup.css"
import isPass from "./js/isPass.js"
import { Helmet } from "react-helmet"
// import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import $ from "jquery"
const Signup = () => {
  const [pass1, setPass1] = useState(null)
  const [pass2, setPass2] = useState(null)
  const [email, setEmail] = useState(null)
  const [fname, setFname] = useState(null)
  const [lname, setLname] = useState(null)
  const [pno, setPno] = useState(null)
  var res = { isAllowed: false },
    url_var = "/signup/login"
  let history = useHistory()

  async function check() {
    const params = {
      email: email,
      phone: parseInt(pno),
    }

    await axios
      .post("http://localhost:4000/users/check/duplicate", params)
      .then((response) => {
        res = response.data
        console.log(res)
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }
  var isalpha = function (ch) {
    return /^[A-Z]$/i.test(ch)
  }
  var isdigit = function (ch) {
    return /^[0-9]$/i.test(ch)
  }
  var ischar = function (ch) {
    return !isalpha(ch) && !isdigit(ch)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    var errors = 0
    var height = 530

    var patt =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    var result = null
    if (email != undefined) result = email.match(patt)
    var spaceFlag = true
    if (result != null) spaceFlag = true ? result.indexOf(" ") > -1 : false

    {
      if (spaceFlag || result == null) {
        errors = errors + 1
        $(".mains").css("height", 310)
        url_var = "/unvailablelogin"
        $("#email").css("border-color", "red")
        $("#email").css("background-color", "rgba(255,0,0,0.3)")
        document.getElementById("sfail1").innerHTML = "Invalid email"
        e.preventDefault()
      } else {
        $(".mains").css("height", 285)
        $("#email").css("border-color", "#ffc800")
        $("#email").css("background-color", "white")
        document.getElementById("sfail1").innerHTML = null
      }
    }
    {
      var alpha = false
      var len = fname.length
      for (i = 0; i < len; i = i + 1) {
        if (!isalpha(fname[i])) {
          alpha = true
          break
        }
      }
      if (alpha || fname == "") {
        $("#fname").css("border-color", "red")
        $("#fname").css("background-color", "rgba(255, 0, 0, 0.1)")
        errors = errors + 1
        document.getElementById("sfail1").innerHTML = "Enter a valid First Name"
      } else {
        $("#fname").css("background-color", "rgba(255, 255, 255, 1)")
        $("#fname").css("border-color", "green")
        document.getElementById("sfail1").innerHTML = null
      }
    }
    {
      var alpha = false
      var len = lname.length
      for (i = 0; i < len; i = i + 1) {
        if (!isalpha(lname[i])) {
          alpha = true
          break
        }
      }
      if (alpha || lname == "") {
        $("#lname").css("border-color", "red")
        $("#lname").css("background-color", "rgba(255, 0, 0, 0.1)")
        errors = errors + 1
        document.getElementById("sfail2").innerHTML = "Enter a valid First Name"
      } else {
        $("#lname").css("background-color", "rgba(255, 255, 255, 1)")
        $("#lname").css("border-color", "green")
        document.getElementById("sfail2").innerHTML = null
      }
    }
    {
      var numLen = pno.length
      var numFlag = true
      var i = 0
      if (numLen != 10) {
        $("#pno").css("border-color", "red")
        $("#pno").css("background-color", "rgba(255, 0, 0, 0.1)")
        errors = errors + 1
        document.getElementById("sfail6").innerHTML =
          "Enter a valid Phone Number"
      } else {
        for (i = 0; i < 10; i++) {
          if (!isdigit(pno[i])) {
            numFlag = false
            break
          }
        }
        if (!numFlag) {
          $("#pno").css("border-color", "red")
          $("#pno").css("background-color", "rgba(255, 0, 0, 0.1)")
          errors = errors + 1
          document.getElementById("sfail6").innerHTML =
            "Enter a valid Phone Number"
        } else {
          $("#pno").css("background-color", "rgba(255, 255, 255, 1)")
          $("#pno").css("border-color", "green")
          document.getElementById("sfail6").innerHTML = null
        }
      }
    }
    {
      var message = null
      if (pass1 == "") {
        message = "Enter Password"
      } else if (!isPass(pass1)) {
        errors = errors + 2
        message =
          "password must contain one special character and length must be greater than 4"
      }
      {
        if (message != null) {
          $("#password").css("border-color", "red")
          $("#password").css("background-color", "rgba(255, 0, 0, 0.1)")
          errors = errors + 1
        } else {
          $("#password").css("background-color", "rgba(255, 255, 255, 1)")
          $("#password").css("border-color", "green")
        }
      }
      document.getElementById("sfail4").innerHTML = message
    }
    {
      if (pass2 == "") {
        $("#confirm").css("border-color", "red")
        $("#confirm").css("background-color", "rgba(255, 0, 0, 0.1)")
        errors = errors + 1
        document.getElementById("sfail5").innerHTML = "Renter the password"
      } else if (pass1 != pass2) {
        $("#confirm").css("border-color", "red")
        $("#confirm").css("background-color", "rgba(255, 0, 0, 0.1)")
        errors = errors + 1
        document.getElementById("sfail5").innerHTML =
          "Re-entered password does not match"
      } else {
        $("#confirm").css("background-color", "rgba(255, 255, 255, 1)")
        $("#confirm").css("border-color", "green")
        document.getElementById("sfail5").innerHTML = null
      }
    }
    height = height + errors * 15
    height = height.toString() + "px"
    $(".mains").css("height", height)
    if (errors > 0) e.preventDefault()
    if (errors == 0)
      await check().then(() => {
        {
          if (res.phone == 1) {
            $("#pno").css("border-color", "red")
            $("#pno").css("background-color", "rgba(255, 0, 0, 0.1)")
            errors = errors + 1
            document.getElementById("sfail6").innerHTML =
              "Phone Number already in use"
            e.preventDefault()
          } else {
            $("#pno").css("border-color", "white")
            $("#pno").css("background-color", "white")
            document.getElementById("sfail6").innerHTML = null
          }
        }
        {
          if (res.email == 1) {
            $("#email").css("border-color", "red")
            $("#email").css("background-color", "rgba(255, 0, 0, 0.1)")
            errors = errors + 1
            document.getElementById("sfail3").innerHTML =
              "Email id already in use"
            e.preventDefault()
          } else {
            $("#email").css("border-color", "white")
            $("#email").css("background-color", "white")
            document.getElementById("sfail3").innerHTML = null
          }
        }
        var aheight = 530 + errors * 15
        aheight = aheight.toString() + "px"
        $(".mains").css("height", aheight)
        if (res.done == 1) {
          localStorage.setItem("password", pass1)
          localStorage.setItem("lastName", lname)
          localStorage.setItem("firstName", fname)
          localStorage.setItem("phone", pno)
          localStorage.setItem("email", email)
          history.push("/otpcheck")
        }
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
      <body class='sbody'>
        <div class='overlays'>
          &nbsp;&nbsp;
          <br />
          <div class='mains'>
            <div style={{ fontSize: "30px", paddingTop: "8px" }}>Sign Up</div>
            <br />
            <form
              id='signup'
              class='signup'
              name='signup'
              onSubmit={handleSubmit}
            >
              <div style={{ fontSize: "18px", paddingLeft: "10px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                First Name :
                <input
                  type='text'
                  id='fname'
                  name='fname'
                  placeholder='First Name'
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <div id='sfail1'></div>
              </div>
              <br />
              <div style={{ fontSize: "18px", paddingLeft: "10px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Last Name :
                <input
                  type='text'
                  id='lname'
                  name='lname'
                  placeholder='Last Name'
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
                <div id='sfail2'></div>
              </div>
              <br />
              <div style={{ fontSize: "18px", paddingLeft: "10px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail
                :
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='username@example.domain'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div id='sfail3'></div>
              <br />
              <div style={{ fontSize: "18px", paddingLeft: "10px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Phone :
                <input
                  type='text'
                  id='pno'
                  name='pno'
                  placeholder='Phone Number'
                  onChange={(e) => setPno(e.target.value)}
                  required
                />
              </div>

              <div id='sfail6'></div>
              <br />
              <div style={{ fontSize: "18px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
                :
                <input
                  type='password'
                  id='password'
                  name='pass'
                  placeholder='Password'
                  onChange={(e) => setPass1(e.target.value)}
                  required
                />
              </div>
              <div id='sfail4'></div>
              <br />
              <div style={{ fontSize: "18px", paddingLeft: "10px" }}>
                Confirm Password :
                <input
                  type='password'
                  id='confirm'
                  name='confirm'
                  placeholder='Confirm Password'
                  onChange={(e) => setPass2(e.target.value)}
                  required
                />
                <div id='sfail5'></div>
              </div>
              <div style={{ paddingTop: "18px", paddingBottom: "9px" }}>
                <input type='submit' value='SignUp' />
              </div>
              <div id='login'>
                Have an account?&nbsp;<a href='login'>Login</a>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Signup
