import FeedbackItem from "./FeedbackItem"



const FeedbackList = ({feedback, handleDelete}) => {

   


  return (
    <div>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList