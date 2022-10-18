import { Link } from "react-router-dom"
import Card from "../../shared/card/card.component"


const Aboutpage = ()=>{

   return(
      <div>
         <Card>
            <h1>This is the about page</h1>
            <Link to={"/"}>Go Back Home</Link>
         </Card>
      </div>
   )
}

export default Aboutpage