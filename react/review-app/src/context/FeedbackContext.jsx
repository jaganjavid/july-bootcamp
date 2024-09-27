
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
          id:1,
          text:"This is a context one"
        },
        {
          id:2,
          text:"This is a context two"
        },
        {
          id:3,
          text:"This is a context three"
        },
        {
          id:4,
          text:"This is a context four"
        }
      ]);

      const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    
      const addFeedback = (newFeedback) => {
    
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    
      }


      return (
        <FeedbackContext.Provider value={{
            feedback:feedback,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
      )
}

export default FeedbackContext;