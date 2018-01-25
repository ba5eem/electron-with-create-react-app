import React, { Component } from 'react';
import './Header.css';

const searchIcon = 'http://bit.ly/2E8L1NW';
const profileIcon = 'http://bit.ly/2nfmDmL';
const notificationIcon = 'http://bit.ly/2BtJKxZ';

const Logo = ({logo}) => {
  return <h1>{logo}</h1>
}

const SearchBar = () => {
  return (
    <div>
      <img className='header-search-bar' src={searchIcon} alt=""/>
      <input 
        className='header-search-bar input'
        placeholder="Search" 
        type="text"/>
    </div>
    )
}

const Link = ({link}) => {
  return (<a className="link-header" href="">{link}</a>)
}

const Profile = ({}) => {
  return (<img className='header-profile' src={profileIcon} alt=""/>)
}

const Notification = ({}) => {
  return (<img className='header-notification' src={notificationIcon} alt=""/>)
}



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