import "./css/informal.css"

import { Helmet } from "react-helmet"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./css/loading.css"
import $ from "jquery"
const ChangePassword = () => {
  let history = useHistory()
  const email = localStorage.getItem("email")
  const firstName = localStorage.getItem("firstName")
  const lastName = localStorage.getItem("lastName")
  const password = localStorage.getItem("password")
  const phone = localStorage.getItem("phone")
  const [otp, setOTP] = useState()
  var res = { isAllowed: false }
  async function check() {
    const params = {
      email: email,
      otp: otp,
      phone: phone,
      lastName: lastName,
      firstName: firstName,
      password: password,
    }
    $(".loading").css("display", "block")
    await axios
      .post("http://localhost:5500/users/signup", params)
      .then((response) => {
        $(".loading").css("display", "none")
        res = response.data
        console.log(res)
      })
      .catch((error) => {
        $(".loading").css("display", "none")
        alert(error)
        console.log(error)
      })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    res = { is: "a" }

    await check()
      .then(() => {
        if (res.done == 1) {
          const proceed = localStorage.getItem("proceed")
          localStorage.clear()
          localStorage.setItem("proceed", proceed)
          history.push("/signup/login")
        } else alert("Invalid OTP")
      })
      .catch((error) => alert(error))
  }

  return (
    <div>
      <Helmet>
        <title>Hotel Atlantis | OTP</title>

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
      <div class='loading' id='loading'>
        <img
          class='load'
          src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e472y9ys724kuop9ggv1bab9evw4ul8qodktgxzm8zs&rid=giphy.gif'
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div style={{ overflowY: "hidden", textAlign: "center" }}>
          <h1>OTP</h1>
        </div>
        <br />
        <br />
        <form id='form' name='form' onSubmit={handleSubmit}>
          &nbsp;
          <br />
          <br />
          <div>
            <label htmlFor='guests'>
              <div style={{ fontSize: "25px" }}>
                Enter your OTP&nbsp;&nbsp;&nbsp;
              </div>
            </label>
            <br />
            <input
              style={{
                height: "33px",
                width: "300px",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              onChange={(e) => {
                setOTP(e.target.value)
              }}
              type='text'
              required
            />

            <br />
            <br />
          </div>
          <input
            type='submit'
            className='submitButton'
            defaultValue='Confirm'
            style={{ border: "2px solid #ffc800" }}
          />
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
