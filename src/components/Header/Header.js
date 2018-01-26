import React, { Component } from 'react';
import './Header.css';
import { Logo, SearchBar, Link, Profile, PinPost,UrlInput } from './components';




class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
        url: '',
        pin: false

    }
    this.goHome=this.goHome.bind(this);
    this.searchTag=this.searchTag.bind(this);
    this.newPin=this.newPin.bind(this);
    this.handleUrl=this.handleUrl.bind(this);
  }

  goHome(e){
    e.preventDefault();
    this.props.filterTag('')
  }

  searchTag(e){
    this.props.filterTag(e.target.value);
  }

  newPin(e){
    this.setState({pin: !this.state.pin})
    this.props.newPin(this.state.url);
  }

  handleUrl(e){
    this.setState({url: e.target.value})
  }




  render(){
    const {pin} = this.state;
    return(
        <div>
          <nav className="navbar-header">
            <Logo logo='B'/>
            <SearchBar searchTag={this.searchTag} />
            <Link goHome={this.goHome} link="Home"/>
            <Link link="Explore"/>
            <Profile />
            <PinPost pin={pin} newPin={this.newPin} />
            {pin ? <UrlInput handleUrl={this.handleUrl} /> : null }
          </nav>
          
        </div>
      )
  }
}

export default Header;