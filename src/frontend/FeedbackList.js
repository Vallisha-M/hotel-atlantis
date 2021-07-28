import React from "react"
import "./css/events.css"

import "font-awesome/css/font-awesome.min.css"
export default function FeedbackList(props) {
  const displayFeedback = (props) => {
    const { events } = props
    const halfStar = (a, b) => {
      var prop = "none"
      if (a != b)
        return (
          <i
            className='fa fa-star-half-o'
            id='half'
            style={{
              fontSize: "25px",
              color: "#ffc800",
              display: { prop },
            }}
          ></i>
        )
      else return ""
    }

    if (events.length > 0) {
      return events.map((event) => {
        var des = event.describe
        var stars = ""
        const star = "🌟"
        var counter1 = parseFloat(event.star)

        var counter = parseInt(counter1)
        var i = 0
        while (i < counter) {
          stars = stars + star
          i = i + 1
        }
        if (des == "") des = "Great!"
        return (
          <tr>
            <td>{event.name}</td>
            <td>
              {stars}
              {halfStar(counter1, counter)}
            </td>
            <td>{des}</td>
          </tr>
        )
      })
    } else {
      return <h2>No feedbacks yet</h2>
    }
  }

  return <>{displayFeedback(props)}</>
}
