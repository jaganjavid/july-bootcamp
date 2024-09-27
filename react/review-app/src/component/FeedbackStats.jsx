import React, { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"

const FeedbackStats = () => {

  const {feedback} = useContext(FeedbackContext);

  return (
    <div>
       <h5>Total List ({feedback.length})</h5>
    </div>
  )
}

export default FeedbackStats