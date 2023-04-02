import React, { Component } from 'react';
import './Styles/Contact.css';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Contact extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSd8G-oFVa7KLssF57NPB0yxhlzIE8wkVlvMlebceTTJmt0XVw/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
    <div id = "contact">
        <div className='contact-container d-block d-lg-flex'>
           <Fade duration = {1500}><div className='d-none d-lg-block text-box-contact col-lg-6'>
                <h1 style={{textAlign: "center"}} className='white-txt'>Get a Proposal From Us</h1>
                
                <div style={{border: "solid white 3px", padding: "40px"}}>
                <h4 className='white-txt' style={{textAlign: "center"}}>What we will Discuss</h4>
                <hr className='white-line'></hr>
               

                <ul className='list-com'>

                <li><h3 className='white-txt'>Key Components of your Business Goals</h3></li>
                <li><h3 className='white-txt middle-li'>How our Marketing Strategies can meet those goals</h3></li>
                <li><h3 className='white-txt'>Discuss any question you may have regarding how we </h3></li>
             
                </ul>
                </div>
            </div></Fade> 
            <h1 style={{textAlign: "center"}} className='white-txt d-block d-lg-none'>Get a Proposal From Us</h1>
            <div id="ff-compose" className='col-lg-6'></div>
        </div>
        
    </div>
    );
  }
}

export default Contact;
