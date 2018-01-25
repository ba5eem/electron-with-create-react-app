import React, { Component } from 'react';
import '../../App.css';


const HeaderView = ({changeView,title}) => {
  return(
        <li className="nav-item">
          <a onClick={changeView} className="nav-link" href="">{title}</a>
        </li>
    )
}


class Header extends Component {

  render() {
    const {changeView} = this.props;
    const views = ['Images', 'Notes', 'Articles', 'Random'];
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="">organiZhit</a>
          <ul className="navbar-nav">
              {views.map((elem,i) => {
                return <HeaderView key={i} title={elem} changeView={changeView} />
              })}
            </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
