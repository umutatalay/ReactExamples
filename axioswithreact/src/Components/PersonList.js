import React, { Component } from 'react'
import axios from 'axios';


export default class PersonList extends Component {
    state ={
        persons:[]
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res=> {
            console.log(res+"Bayrak");
            this.setState({persons :res.data});
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person=> <li key={person.id}>{person.name}</li>)}
                </ul>
            </div>
        )

       
    }
}
