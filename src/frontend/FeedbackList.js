import React from "react"
import "./css/events.css"
export default function FeedbackList(props) {
  const displayFeedback = (props) => {
    const { events } = props

    if (events.length > 0) {
      return events.map((event) => {
        var des = event.describe
        var stars = ""
        const star = "🌟"
        const counter = parseInt(event.star)
        var i = 0
        while (i < counter) {
          stars = stars + star
          i = i + 1
        }
        if (des == "") des = "Great!"
        return (
          <tr>
            <td>{event.name}</td>
            <td>{stars} </td>
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
