import React, { Component } from 'react'
import axios from 'axios';


export default class PersonInput extends Component {
    state ={
        name:"Umut",
    }
    
    handleChange= event=>{
        this.setState({name:event.target.value});
    }

    handleSubmit=event =>{
        event.preventDefault();

        const user= {
            name:this.state.name
        }

        axios.post('http://jsonplaceholder.typicode.com/users',{user})
        .then(res =>{
            console.log(res);
            console.log(res.data);
        })
    }

    
    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>
                   <label>
                        Name: <input type="text" name="name" onChange={this.handleChange}></input>
                   </label>
                   
               </label>

               <button type='submit'>Ekle</button>
           </form>
        )

       
    }
}
