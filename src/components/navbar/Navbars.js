import React, { Component } from 'react';
import "./navbar.css";
import Logo from "../../img/logo.png";
import { NavLink } from 'react-router-dom';


class Navbars extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
        <nav className="container">
           <div className="wrapper">

               <div className="left">
                   <img src={Logo} />
               </div>

               <div className="right">
               <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
                   <ul className={this.state.clicked ? 'menu actives' :'menu'}>
                      <li ><NavLink exact  to="/" className="menu-list" >Home</NavLink></li>
                      <li ><NavLink to="/feature" className="menu-list" >Features</NavLink></li>
                      <li ><NavLink to="/roadmap" className="menu-list" >Roadmap</NavLink></li>
                      <li ><NavLink to="/team" className="menu-list" >Team</NavLink></li>
                      <li><button type="sumbit" className="btn">Join Our Discord</button></li>
                   </ul>
               </div>
           </div>
        </nav>
    )
    }
    
}

export default Navbars
