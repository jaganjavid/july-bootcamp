
// useEffect

import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        // {
        //   id:1,
        //   text:"This is a context one"
        // },
        // {
        //   id:2,
        //   text:"This is a context two"
        // },
        // {
        //   id:3,
        //   text:"This is a context three"
        // },
        // {
        //   id:4,
        //   text:"This is a context four"
        // }
      ]);


      const fetchFeedBack = async () => {

         const response = await fetch("http://localhost:3000/posts");

         const data = await response.json();

         setFeedback(data);

      }

      useEffect(() => {
        fetchFeedBack();
      }, []);
     
      const addFeedback = async(newFeedback) => {
    
        // newFeedback.id = uuidv4();

        const response = await fetch("http://localhost:3000/posts", {
          method:"POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        setFeedback([data, ...feedback]);
    
      }


      const deleteFeedback = async(id) => {

        if(confirm("Are you sure?")){
          const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method:"DELETE",
            headers: {
              "Content-Type":"application/json"
            }
          })
  
          setFeedback(feedback.filter((item) => item.id !== id));
        }


       
      }
    
      

      const updateFeedback = async(id, updItem) => {
 
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
          method:"PUT",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(updItem)

        });

        const data = await response.json();


        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item));
      }


       const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
      })

      const editFeedback = (item) => {
        setFeedbackEdit({
          item:item, 
          edit:true
        })
      }


      return (
        <FeedbackContext.Provider value={{
            feedback:feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            updateFeedback,
            editFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
      )
}

export default FeedbackContext;