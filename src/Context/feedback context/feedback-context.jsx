// import { useEffect } from "react";
import { createContext, useState } from "react";
import FeedbackData from "../../data/Feedback-Data";

export const FeedbackContext = createContext({
   feedbackData: null,
   isLoading:true
});



export const FeedbackProvider = ({children})=>{
   // const [isLoading, setIsLoading] = useState(true)
   const [feedbackData,setFeedbackData] = useState(FeedbackData)
   const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
   }) 


   // useEffect(() => {
   //    const data = async ()=>{
   //       const res = await fetch("http://localhost:5000/feedback");
   //       const test = await res.json()
   //       setFeedbackData(test);
   //       setIsLoading(false)
   //    }
   //    data()
   // }, []);

   

   const editFeedback = (item)=>{
      setFeedbackEdit({
         item,
         edit: true
      })
   }

   // remove
   // const remove = (fbId) => {
   //    const filter = feedbackData.filter((ele) => ele.id !== fbId);
   //    setFeedbackData(filter)
   // };

   // const value = {feedbackData,setFeedbackData,feedbackEdit,editFeedback, isLoading}
   const value = {feedbackData,setFeedbackData,feedbackEdit,editFeedback}

   return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>
}

