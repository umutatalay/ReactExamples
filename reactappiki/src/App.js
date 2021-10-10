import React, { Component } from 'react'
import User from './components/User'
import UserCard from './components/UserCard'
import './App.css'
import Navbar from './components/navbar'
import Users from './components/Users'
export class App extends Component {
  state={
    users:[
      {
        id:1,
        Name: "Umut Array",
        City:"Istanbul Array",
        About:"Hakkında Array",
        Gender:"Male"
      },
      {
        id:2,
        Name: "Player 2",
        City:"Istanbul 2",
        About:"Hakkında 2",
        Gender:"Computer"
      },

      {
        id:3,
        Name: "Player 3",
        City:"Istanbul 3",
        About:"Hakkında 3",
        Gender:"Computer"
      
      },
    ]

     
    
  }
  render() {
    return (
      <div>
        
        <Navbar title="Menü User App"/>
        
        {/* <hr></hr>
        <p className="header">React with BS</p>
        <h1 style={{color:"blue",fontSize:"28px"}}>Umut</h1>
        <p className="mt-4">BS mt - 4 </p>
        <hr></hr>
        <User UserName="Umut Atalay" UserCity="Istanbul" UserAbout="Comp Eng" Gender="Erkek"/>
        <User UserName="Player 2" UserCity="Ev" UserAbout="Computer" /> */}
        <hr></hr>
        <UserCard Name="Umut Atalay" About="Bilgisayar Mühendisi" City="İstanbul" Gender="Erkek"></UserCard>
        <UserCard Name="Computer" About="Player 2 "  Gender="None"></UserCard>
        
        <hr></hr>
        <Users users = {this.state.users} />


      </div>
    )
  }
}

export default App
