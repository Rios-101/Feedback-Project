import { Link } from "react-router-dom"



const AboutIconLink = ()=>{

   return (
      <div className="about-link">
         <Link to={"/about"}>
            <i size={30} className="fas fa-question fa-2x"></i>
         </Link>
      </div>
   );
}


export default AboutIconLink