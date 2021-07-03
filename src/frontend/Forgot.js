import "./css/informal.css"

import { Helmet } from "react-helmet"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./css/loading.css"
import $ from "jquery"
import load from "./img/loading.gif"
const Forgot = () => {
  let history = useHistory()

  const [email, setEmail] = useState()
  var res = { isAllowed: false }

  async function check() {
    const params = {
      email: email,
      token: localStorage.getItem("token"),
    }
    $(".loading").css("display", "block")
    await axios
      .post("http://localhost:5500/users/pass/forgot", params)
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
    var flag = true
    res = { is: "a" }

    if (flag)
      await check().then(() => {
        if (res.notExist == 1) alert("email not registered\nSignup")
        else if (res.done == 0) alert("ERROR\nTry Relogin")
        if (res.done == 1) {
          history.push("/forgot/success")
        }
      })
  }

  return (
    <div>
      <div class='loading' id='loading'>
        <img class='load' src={load} />
      </div>
      <Helmet>
        <title>Hotel Atlantis | Forgot Password</title>

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
      <br />
      <br />
      <br />
      <br />
      <div>
        <div style={{ overflowY: "hidden", textAlign: "center" }}>
          <h1>Forgot Password</h1>
          <h3>Dont't worry. We all forget at times</h3>
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
                Enter your email&nbsp;&nbsp;&nbsp;
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
                setEmail(e.target.value.toLowerCase())
              }}
              type='email'
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

export default Forgot
