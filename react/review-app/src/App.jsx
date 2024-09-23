

import React, { useState } from 'react'

import Header from './component/Header'
import FeedbackList from './component/FeedbackList'
import FeedbackForm from './component/FeedbackForm'
import FeedbackStats from "./component/FeedbackStats";



const App = () => {

  const [feedback, setFeedback] = useState([
    {
      id:1,
      text:"This is a sample one"
    },
    {
      id:2,
      text:"This is a sample two"
    },
    {
      id:3,
      text:"This is a sample three"
    },
    {
      id:4,
      text:"This is a sample four"
    },
    {
      id:5,
      text:"This is a sample five"
    },
  ]);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  }


  return (
    <div>
       
       <Header/>

       <div className='container'>
          <FeedbackForm/>

          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
       </div>


      
    </div>
  )
}

export default App


function add(x){
  console.log(x + 5);
}




