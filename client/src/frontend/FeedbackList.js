import React from "react"
import "./css/events.css"
import halfstar from "./css/img/halfstar.png"
export default function FeedbackList(props) {
  const displayFeedback = (props) => {
    const { events } = props
    const hello = (a, b) => {
      if (a - b != 0) return "☆"
      return ""
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
            <td>{stars + hello(counter1, counter)}</td>
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
