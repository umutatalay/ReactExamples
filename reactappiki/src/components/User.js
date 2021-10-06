import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class User extends Component {
    render(props) {

        //Desturcting 
     // alt kısımda cont ile tanımladğım şey sayesinde this.props yazmadım. (Desturcting)
        const {UserCity}=this.props;
        return (
            <div>
                <h2> Component eklendi ... </h2>
                

                <ul>
                <i className="fas fa-user"></i>
                    <li>Name : {this.props.UserName}</li>
                    <li>About :{this.props.UserAbout} </li>
                    <li>City : {UserCity}</li>
                    <li>Gender: {this.props.Gender}</li>
                </ul>
            </div>
        )
    }
}

User.defaultProps={
    UserName:"isim girilmedi.",
    Gender:"Cinsiyet girilmedi."
}

User.propTypes={
    UserName: PropTypes.string.isRequired,
    UserAbout: PropTypes.string.isRequired,
    UserCity: PropTypes.string.isRequired,
    Gender: PropTypes.string.isRequired,
    
}
