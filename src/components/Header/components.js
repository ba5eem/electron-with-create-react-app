import React from 'react';

const searchIcon = 'http://bit.ly/2E8L1NW';
const profileIcon = 'http://bit.ly/2nfmDmL';
const addIcon = 'https://png.icons8.com/metro/1600/plus.png';
const saveIcon = 'http://bit.ly/2lYWg6g';

export const Logo = ({logo}) => {
  return <h1>{logo}</h1>
}

export const SearchBar = ({searchTag}) => {
  return (
    <div>
      <input
        onChange={searchTag} 
        className='header-search-bar input'
        placeholder="Search" 
        type="text"/>
    </div>
    )
}

export const Link = ({link,goHome}) => {
  return (<a onClick={goHome} className="link-header" href="">{link}</a>)
}

export const Profile = ({}) => {
  return (<img className='header-profile' src={profileIcon} alt=""/>)
}

export const PinPost = ({pin,newPin}) => {
  const src = pin ? saveIcon : addIcon;
  return (<img 
            onClick={newPin} 
            className='header-notification' 
            src={src} 
            alt=""/>)
}

export const UrlInput = ({handleUrl}) => {
  return <input onChange={handleUrl} type="text" placeholder='URL:'/>
}