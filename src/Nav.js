import React, { Component } from 'react';
import logo from "./Assets/logo.png";
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class Navigation extends Component {
    state = {  } 
    handleClick = () => {
        try {
          document.querySelector("html").scrollTo(0,0);
        } catch (err) {
          console.error(err);
        }
      }
    render() { 
        return (
            <div id='nav'>
                
                <Link onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/">
                <div className='logo-tab'>
                    <Fade duration ={2500}><img src={logo}/></Fade>
                </div>
                    </Link>
                
                <div className='tabs'>
                    <Link onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Contact">
                    <a className='navlink'><b>Contact Us</b></a>
                    </Link>
                </div>
                
            </div>
        );
    }
}
 
export default Navigation;