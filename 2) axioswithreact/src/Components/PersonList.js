import React, { Component } from 'react'
import axios from 'axios';


export default class PersonList extends Component {
    state ={
        persons:[]
    }

    componentDidMount(){
        axios.get('https://localhost:44362/api/product/hepsi')
        .then(res=> {
            console.log(res+"Bayrak");
            this.setState({persons :res.data});
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person=><li key={person.productId}>{person.name}</li>)}
                </ul>
            </div>
        )

       
    }
}
