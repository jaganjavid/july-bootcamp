

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({item}) => {

  const {deleteFeedback} = useContext(FeedbackContext);
  

  return (
    <Card>
    
    <h4>{item.text}</h4>
    
    <FaEdit className="edit" size="20px" color="#b16e0e"/>
    <MdDelete onClick={() => deleteFeedback(item.id)} className="delete" size="20px" color="#b80d0d"/>


  </Card>
  )
}


export default FeedbackItem