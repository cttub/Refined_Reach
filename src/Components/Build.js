import React, { Component, useRef, useEffect  } from 'react';
import './Styles/Build.css';
import logo from '../Assets/logo.png';
import bar from '../Assets/bar.svg';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

class Build extends Component {
    state = {  } 
    render() { 
        return (
            <div id='build'>
                <div className='card-section'>
                    <Fade left duration = {1500}><div className='first-card d-lg-block d-none col-lg-3 gold-border'>

                    </div></Fade>

                    <Fade duration = {2500}><div className='second-card col-lg-4 col-sm-12 gold-border'>
                      
                        <div className='logo-image'>
                            <img className='bar-logo d-sm-none d-block' src={bar}/>
                            <img className='logo d-sm-block d-none' src={logo}/>
                        </div>
                        <h4>Build your audience</h4>
                        <p style={{padding: "30px"}}>Our clients benefit from exceptional results delivered through a 
                        range of effective marketing techniques, including the utilization of Google Ads, 
                        specialized brand designs, and website development. </p>
                       
                        <Link onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Contact">
                            <div className='d-none d-lg-block'><a className='text-link'>Get a Proposal</a></div>
                        </Link>
                        

                    </div></Fade>

                    <Fade right duration = {1500}><div className='third-card d-lg-block d-none col-lg-3 gold-border'>

                    </div></Fade>
                </div>
            </div>
        );
    }
}
 
export default Build;