import "./css/informal.css"
import isPass from "./js/isPass"
import { Helmet } from "react-helmet"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
const ChangePassword = () => {
  let history = useHistory()
  if (
    localStorage.getItem("loggedIn") == null ||
    localStorage.getItem("loggedIn") == "false"
  ) {
    localStorage.setItem("proceed", "/private/informal")
    history.push("/protect")
  }

  const email = localStorage.getItem("email")
  const [pass, setPass] = useState()
  var res = { isAllowed: false }
  async function check() {
    const params = {
      email: email,
      password: pass,
      token: localStorage.getItem("token"),
    }

    await axios
      .post("http://localhost:4000/users/pass/change/", params)
      .then((response) => {
        res = response.data
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const flag = isPass(pass)

    res = { is: "a" }
    if (flag)
      await check()
        .then(() => {
          if (res.done == 0) alert("ERROR\nTry Relogin")
          else if (res.done == 1) history.push("/passchange/success")
        })
        .catch((error) => alert(error))
    else {
      alert(
        "password must contain one special character and length must be greater than 4"
      )
    }
  }

  return (
    <div>
      <Helmet>
        <title>Hotel Atlantis | Formal</title>

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
          <h1>Reset Password</h1>
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
                Enter your new password&nbsp;&nbsp;&nbsp;
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
                setPass(e.target.value)
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
