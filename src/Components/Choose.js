import React, { Component } from 'react';
import './Styles/Choose.css';
import Fade from 'react-reveal/Fade';
import arrow from '../Assets/arrow.svg';
import {Link} from 'react-router-dom';
class Choose extends Component {
    state = {  } 
    render() { 
        return (
            <div id='choose'>
                <Fade up duration = {1500}><div className='choose-container black-border col-lg-7'>
                    <h1>Why Choose Us?</h1>
                    <div className='flow d-lg-flex'>
                        <h4>Branding</h4>
                        <img className='d-none d-lg-block' src= {arrow}/>
                        <hr></hr>
                        <h4>Development</h4>
                        <img className='d-none d-lg-block' src= {arrow}/>
                        <hr></hr>
                        <h4>Growth</h4>
                    </div>
                    <p>
                    Our services offer all the necessary resources for your business. 
                    Whether you are starting your business from scratch, or looking to 
                    enhance your existing online presence, you can count on us to cultivate your brand's success and growth.
                    </p>
                    <Link onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Contact">
                            <div className='d-none d-lg-block'><a className='text-link'>Work with Us</a></div>
                    </Link>
                   
                    
                   

                </div></Fade>

            </div>
        );
    }
}
 
export default Choose;