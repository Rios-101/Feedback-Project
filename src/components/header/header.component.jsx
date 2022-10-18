import PropTypes from 'prop-types'
import "./header.style.css"


const Header = ({text})=>{

   return (
      <header className="header">
         <div className="container">
            <h2>{text}</h2>
         </div>
      </header>
   );
}

Header.defaultProps = {
   text:"Rios"
}

Header.propTypes ={
   text: PropTypes.string
}

export default Header