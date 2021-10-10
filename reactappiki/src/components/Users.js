import React, { Component } from 'react'
import UserCard from './UserCard';
export default class Users extends Component {
    render() {
        const{users}=this.props;
       
        return (
            <div>
                {
                    users.map(user=>{
                        return(
                            <UserCard 
                            key={user.id}
                            Name={user.Name}
                            About={user.About}
                            City={user.City}
                            Gender={user.Gender}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
