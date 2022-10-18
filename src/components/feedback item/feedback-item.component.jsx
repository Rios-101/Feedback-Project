import { useContext } from "react"
import {FaEdit, FaTimes} from "react-icons/fa"
import Card from "../../components/shared/card/card.component"
import { FeedbackContext } from "../../Context/feedback context/feedback-context";


const FeedbackItem = ({ fbRating, fbText, feedbackData, fbId, feedback }) => {

   const { setFeedbackData, editFeedback } = useContext(FeedbackContext);


   const remove = () => {
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
            <FaTimes color="purple" />
         </button>
         <button onClick={edit} className="edit">
            <FaEdit color="purple" />
         </button>
         
         <div className="text-display">{fbText}</div>
      </Card>
   );
};

export default FeedbackItem