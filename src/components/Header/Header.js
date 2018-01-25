import React, { Component } from 'react';
import './Header.css';
import { Logo, SearchBar, Link, Profile, Notification } from './components';






class Header extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
        <div>
          <nav className="navbar-header">
            <Logo logo='B'/>
            <SearchBar />
            <Link link="Home"/>
            <Link link="Explore"/>
            <Profile />
            <Notification />
          </nav>
          
        </div>
      )
  }
}

export default Header;