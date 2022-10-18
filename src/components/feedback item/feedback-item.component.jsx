import { useContext } from "react"
import Card from "../../components/shared/card/card.component"
import { FeedbackContext } from "../../Context/feedback context/feedback-context";
import "./feedback-item.style.css"


const FeedbackItem = ({ fbRating, fbText, feedbackData, fbId, feedback }) => {

   const { setFeedbackData, editFeedback } = useContext(FeedbackContext);


   const remove =async () => {
      await fetch(`http://localhost:5000/feedback/${fbId}`, {method:"DELETE"});
      const filter = feedbackData.filter( ele => ele.id !== fbId)
      setFeedbackData(filter)
   };

   const edit = ()=>{
      // console.log(feedbackData);
      // const edited = feedbackData.filter(e=> e.id === fbId )
      // setFeedbackEdit(edited);
      editFeedback(feedback)
   }

   return (
      <Card className="card">
         <div className="num-display">{fbRating}</div>
         <button onClick={remove} className="close">
            <i className="fas fa-times purple"></i>
         </button>
         <button onClick={edit} className="edit">
            <i className="fas fa-edit purple"></i>
         </button>

         <div className="text-display">{fbText}</div>
      </Card>
   );
};

export default FeedbackItem