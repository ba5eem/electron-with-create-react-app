import React from 'react';

const searchIcon = 'http://bit.ly/2E8L1NW';
const profileIcon = 'http://bit.ly/2nfmDmL';
const notificationIcon = 'http://bit.ly/2BtJKxZ';

export const Logo = ({logo}) => {
  return <h1>{logo}</h1>
}

export const SearchBar = () => {
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

export const Link = ({link}) => {
  return (<a className="link-header" href="">{link}</a>)
}

export const Profile = ({}) => {
  return (<img className='header-profile' src={profileIcon} alt=""/>)
}

export const Notification = ({}) => {
  return (<img className='header-notification' src={notificationIcon} alt=""/>)
}