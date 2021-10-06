import React from "react";
import PropTypes from "prop-types"
function Navbar(props){
    return (
        <h3> {props.title}</h3>
    )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"No Data"
}
export default Navbar;


