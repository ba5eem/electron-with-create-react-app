import React, { Component } from 'react';
import './Header.css';
import { Logo, SearchBar, Link, Profile, Notification } from './components';


class Header extends Component {
  constructor(props){
    super(props);

    this.state = {


    }
    this.goHome=this.goHome.bind(this);
    this.searchTag=this.searchTag.bind(this);
  }

  goHome(e){
    e.preventDefault();
    this.props.filterTag('')
  }

  searchTag(e){
    this.props.filterTag(e.target.value);
  }




  render(){
    return(
        <div>
          <nav className="navbar-header">
            <Logo logo='B'/>
            <SearchBar searchTag={this.searchTag} />
            <Link goHome={this.goHome} link="Home"/>
            <Link link="Explore"/>
            <Profile />
            <Notification />
          </nav>
          
        </div>
      )
  }
}

export default Header;