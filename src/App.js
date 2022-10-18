import { useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AboutIconLink from './components/about-icon-link/about-icon-link.component';
import FeedbackList from './components/feedback list/feedback-list.component';
import FeedbackStats from './components/feedback stats/feedback-stats';
import FeedbackForm from './components/feedback-form/feedback-form.component';
import Header from './components/header/header.component';
import Aboutpage from './components/pages/about-page/about-page.component';
import { FeedbackContext } from './Context/feedback context/feedback-context';


function App() {

   const {feedbackData} = useContext(FeedbackContext)


  return (
     <>
        <Link style={{textDecoration:"none"}}  to={"/"}>
           <Header text={"Feedback UI"} />
        </Link>
        <div className="container">
           <Routes>
              <Route
                 path="/"
                 element={
                    <>
                       <FeedbackForm/>
                       <FeedbackStats feedbackData={feedbackData} />
                       <FeedbackList/>
                    </>
                 }
              />
              <Route path="/about" element={<Aboutpage />} />
           </Routes>
           <AboutIconLink />
        </div>
     </>
  );
}

export default App;
