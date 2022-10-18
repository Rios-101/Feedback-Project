import { useContext } from "react"
import { FeedbackContext } from "../../Context/feedback context/feedback-context"
import FeedbackItem from "../feedback item/feedback-item.component"



const FeedbackList = ()=>{

   const {feedbackData} = useContext(FeedbackContext)

   if(!feedbackData || feedbackData.length ===0){
      return(
         <div>
            <h3>No Feedback </h3>
         </div>
      )
   }

   return(
      <div className="feedback-list">
         { feedbackData.map(feedback=>{
            return <FeedbackItem key={feedback.id} feedback={feedback} fbId = {feedback.id} fbRating={feedback.rating} fbText={feedback.text} feedbackData={feedbackData} />
           })}
      </div>
   )
}

export default FeedbackList