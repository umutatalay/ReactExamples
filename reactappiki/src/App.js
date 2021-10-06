import React, { Component } from 'react'
import User from './components/User'
import UserCard from './components/UserCard'
import './App.css'
import Navbar from './components/navbar'

export class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar title="Menü User App"/>
        
        <hr></hr>
        <p className="header">React with BS</p>
        <h1 style={{color:"blue",fontSize:"28px"}}>Umut</h1>
        <p className="mt-4">BS mt - 4 </p>
        <hr></hr>
        <User UserName="Umut Atalay" UserCity="Istanbul" UserAbout="Comp Eng" Gender="Erkek"/>
        <User UserName="Player 2" UserCity="Ev" UserAbout="Computer" />
        <hr></hr>
        <UserCard Name="Umut Atalay" About="Bilgisayar Mühendisi" City="İstanbul" Gender="Erkek"></UserCard>
        <UserCard Name="Computer" About="Player 2 "  Gender="None"></UserCard>



      </div>
    )
  }
}

export default App
