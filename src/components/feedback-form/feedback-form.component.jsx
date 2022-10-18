import { useContext, useEffect, useState } from "react"
import { v4 as uuid } from "uuid";
import RatingSelect from "../rating-select/rating-select.component"
import Button from "../shared/button/button.component"
import Card from "../shared/card/card.component"
import { FeedbackContext } from "../../Context/feedback context/feedback-context"



const FeedbackForm = () => {

   const { feedbackData, setFeedbackData, feedbackEdit } =
      useContext(FeedbackContext);

   const [text, setText] = useState("");
   const [isDisabled, setIsDisabled] = useState(true);
   const [message, setMessage] = useState("");
   const [rating, setRating] = useState(null);

   useEffect(()=>{
      if(feedbackEdit.edit === true){
         setText(feedbackEdit.item.text)
         setRating(feedbackEdit.item.rating)
         setIsDisabled(false)
      }
   },[feedbackEdit])

   const change = (e) => {
      if (text.length === 0) {
         setIsDisabled(true);
      } else if (text.length >= 1 && text.length <= 10) {
         setMessage("Review Text Must Be More Than 10 Letters");
         setIsDisabled(true);
      } else if (text.length >= 11) {
         setMessage("");
         setIsDisabled(false);
      }
      setText(e.target.value);
   };

   const submit = async (e) => {
      e.preventDefault();

      
      if (text.length >= 11) {
         const newFeedback = {
            id:uuid(),
            rating:rating,
            text:text
         };

         // POST REQUEST
         // const res = await fetch("http://localhost:5000/feedback", {
         //    method:"POST",
         //    headers:{"Content-Type":"application/json"},
         //    body: JSON.stringify(newFeedback)
         // })
         // const data = await res.json()

         // PUT REQUEST FOR EDIT 
         // const resPut = await fetch(`http://localhost:5000/feedback/${feedbackEdit.item.id}`, {
         //    method: "PUT",
         //    headers: { "Content-Type": "application/json" },
         //    body: JSON.stringify(newFeedback),
         // });
         // const dataPut = await resPut.json();


         
         if(feedbackEdit.edit === true){
            setFeedbackData(feedbackData.map(feedback=>{
               return feedback.id === feedbackEdit.item.id ? {...feedback,...newFeedback}: feedback
               // return feedback.id === feedbackEdit.item.id ? {...feedback,...dataPut}: feedback
            }))
         }else{
            setFeedbackData([ newFeedback,...feedbackData]);
            // setFeedbackData([ data,...feedbackData]);
         }
      }
      setText("")
      setRating(null)
   };



   return (
      <div>
         <Card>
            <form onSubmit={submit}>
               <h2>How would you rate your service with us?</h2>
               <RatingSelect setRating={setRating} />
               <div className="input-group">
                  <input
                     type="text"
                     value={text}
                     placeholder="Write a review"
                     onChange={change}
                  />
                  <Button type="submit" isDisabled={isDisabled}>
                     Send
                  </Button>
               </div>
               <div className="message">{message ? message : null}</div>
            </form>
         </Card>
      </div>
   );
};

export default FeedbackForm