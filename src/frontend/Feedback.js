import { Helmet } from "react-helmet"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"
const Feedback = () => {
  let history = useHistory()
  if (
    localStorage.getItem("loggedIn") == null ||
    localStorage.getItem("loggedIn") == "false"
  ) {
    localStorage.setItem("proceed", "/feedback")
    history.push("/login")
  }
  var email = localStorage.getItem("email")
  const [describe, setDescribe] = useState(() => {
    return null
  })

  var res = { isAllowed: false }

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  }
  const useStyles = makeStyles({
    root: {
      width: 200,
      display: "flex",
      alignItems: "center",
    },
  })
  const [value, setValue] = React.useState(5)
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()
  async function check() {
    const params = {
      star: value,
      email: email,
      describe: describe,
    }

    await axios

      .post("http://localhost:5500/feedback/add/", params)
      .then((response) => {
        res = response.data
        console.log(res)
      })
      .catch((error) => {
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
        console.log(res)
        if (res.duplicate == 1) alert("Slot taken, Try another date")
        if (res.done == 1) history.push("/feedback/confirm")
      })
  }

  return (
    <div>
      <Helmet>
        <title>Hotel Atlantis | Feedback</title>

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
        <div style={{ overflowY: "hidden", textAlign: "left" }}>
          <h2 style={{ marginLeft: "15px", textAlign: "center" }}>
            Feedback Form
          </h2>
        </div>
        <br />

        <form
          id='form'
          name='form'
          onSubmit={handleSubmit}
          style={{ textAlign: "center" }}
        >
          &nbsp;
          <br />
          <br />
          <br />
          <br />
          <div className='fquestion'>
            <label htmlFor='guests'>
              <h3>1. How many stars would you give us?&nbsp;&nbsp;&nbsp;</h3>
            </label>
            <br />
            <div className={classes.root} style={{ marginLeft: "600px" }}>
              <br />
              &nbsp;&nbsp;
              <Rating
                name='hover-feedback'
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover)
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
            <br />
            <br />
          </div>
          <div class='fquestion'>
            <label for='fdescribe'>
              <h3>2. Anything else you want to say;&nbsp;</h3>
            </label>
            <br />
            <br />
            <br />

            <input
              type='text'
              size='95'
              name='describe'
              onChange={(event) => {
                setDescribe(event.target.value)
              }}
              style={{ width: "800px", height: "100px" }}
            />
            <br />
            <br />
          </div>
          <br />
          <br />
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

export default Feedback
