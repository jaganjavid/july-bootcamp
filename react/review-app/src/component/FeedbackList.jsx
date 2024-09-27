import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"




const FeedbackList = () => {

  const { feedback } = useContext(FeedbackContext) 

  
  

  return (
    <div>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList