import { useContext, useState, useEffect } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"


const FeedbackForm = () => {

  const {addFeedback, updateFeedback, feedbackEdit} = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisable, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {

    if(text === ""){

      setBtnDisabled(true);
      setMessage("");

    } else if(text !== "" && text.length < 10){

      setBtnDisabled(true);
      setMessage("Text must be atleast 10 char");

    } else {
      setBtnDisabled(false);
      setMessage("");
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(text.length > 10){

      const newFeedback = {
        text:text
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback);
        setBtnDisabled(true);
        setText("");
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setBtnDisabled(true);
      setMessage("");


    }

  }

  return (
    <Card>
        <h2>Add your Review</h2>

        <form onSubmit={handleSubmit}>
           <div>
            <input type="text" placeholder='Enter your review' onChange={handleTextChange} value={text}/>
            
            <Button type="submit" version="secondary" isDisabled={btnDisable}>
              Send 
            </Button>
           </div>
        </form>

        <div>
          <p className="error">{message}</p>
        </div>
    </Card>
  )
}

export default FeedbackForm