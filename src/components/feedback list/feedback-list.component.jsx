import { useContext } from "react"
import { FeedbackContext } from "../../Context/feedback context/feedback-context"
import FeedbackItem from "../feedback item/feedback-item.component"
import Spinner from "../shared/spinner/spinner.component"



const FeedbackList = ()=>{

   const {feedbackData,isLoading} = useContext(FeedbackContext)

   if(!isLoading && (!feedbackData || feedbackData.length ===0)){
      return(
         <div>
            <h3>No Feedback </h3>
         </div>
      )
   }

   return isLoading ? (
      <Spinner/>
   ) : (
      <div className="feedback-list">
         {feedbackData.map((feedback) => {
            return (
               <FeedbackItem
                  key={feedback.id}
                  feedback={feedback}
                  fbId={feedback.id}
                  fbRating={feedback.rating}
                  fbText={feedback.text}
                  feedbackData={feedbackData}
               />
            );
         })}
      </div>
   );
}

export default FeedbackList