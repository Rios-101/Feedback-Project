import  PropTypes  from "prop-types"

const Button = ({children, type, version, isDisabled})=>{

   return(
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
         {children}
      </button>
   )
}

Button.defaultProps = {
   type:"submit",
   version:"primary"
};

Button.propTypes ={
   type:PropTypes.string,
   version:PropTypes.string,
   isDisabled:PropTypes.bool

}

export default Button