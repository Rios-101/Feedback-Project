import { createContext, useState } from "react";
import FeedbackData from "../../data/Feedback-Data";

export const FeedbackContext = createContext({
   feedbackData: null,
   
});

export const FeedbackProvider = ({children})=>{
   const [feedbackData,setFeedbackData] = useState(FeedbackData)
   const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
   }) 

   const editFeedback = (item)=>{
      setFeedbackEdit({
         item,
         edit: true
      })
   }

   const value = {feedbackData,setFeedbackData,feedbackEdit,editFeedback}

   return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>
}

