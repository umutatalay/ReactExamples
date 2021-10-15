import * as React from 'react'
import PropTypes from 'prop-types'




export default class UserCard extends React.Component {
    state={
        isVisible:false
    }
    //arrow func
    onClickEvent = (number,e) =>{ // bu kısımda eşittir ve => olmasının sebebi bind etmek istemek.
     this.setState({
         isVisible :!this.state.isVisible
     })
    }
    // constructor(props){
    //     super(props);
    //     this.state={
    //         isVisible: false
    //     }
    // }
    render(props) {

        //Desturcting 
     // alt kısımda cont ile tanımladğım şey sayesinde this.props yazmadım. (Desturcting)
        const {City}=this.props;
        const{isVisible}=this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">


                    <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick = {this.onClickEvent.bind(this,34)}> {this.props.Name} </h4>
                    <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>
                </div>   
                {isVisible ?  <div className="card-body">
                  <p className="card-text"> About: {this.props.About}</p>
                  <p className="card-text"> City: {City}</p>
                  <p className="card-text"> Gender: {this.props.Gender}</p>
                  
                </div>:null}
            </div>
        )
    }
}

UserCard.defaultProps={
    Name:"isim girilmedi.",
    About:"No Data",
    City:"Şehir Girilmedi.",
    Gender:"Cinsiyet girilmedi. a"
}

UserCard.propTypes={
    Name: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    City: PropTypes.string.isRequired,
    Gender: PropTypes.string.isRequired,
    
}
