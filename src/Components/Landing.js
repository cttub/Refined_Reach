import React, { Component } from 'react';
import './Styles/Landing.css';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "Landing">
                
                <Fade>
                <div className='landing-info'>
                <div className='d-sm-none d-block'><img className='top-logo' src={logo}/></div>
                    <h4 className='lined-title'>Marketing Made for You</h4>
                    <hr className='hr-small' style={{border: "1px solid black"}}></hr>
                    <h1 className=''>Refined Reach</h1>
        
                    <h3>Expand your reach and achieve growth with our services.</h3>
                    <hr style={{border: "1px solid black"}}></hr>
                    
                </div>
                </Fade>

            </div>
        );
    }
}
 
export default Landing;
