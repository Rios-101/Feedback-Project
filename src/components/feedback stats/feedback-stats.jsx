

const FeedbackStats = ({ feedbackData }) => {

   console.log(feedbackData);

   const totalReview = feedbackData.reduce((total,number)=>{
      const sum = total + number.rating
      return sum
   },0)

   const averageReview = Math.floor(totalReview/feedbackData.length)


   return (
      <div className="feedback-stats">
         <h4>{feedbackData.length} {feedbackData.length > 1 ? "Reviews" : "Review"}</h4>
         <h4>Average Rating: {averageReview}</h4>
      </div>
   )
};

export default FeedbackStats