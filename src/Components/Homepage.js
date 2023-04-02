import React, { Component, useRef } from 'react';

import Landing from './Landing';
import Build from './Build';
import Choose from './Choose';
import Contact from './Contact';

import ReactFullpage from '@fullpage/react-fullpage';

const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';

class Homepage extends Component {
    state = {  } 

    handleFullpageError = (error) => {
        // Handle or log the error
        console.error('Error occurred in fullpage scroll', error);
    }

    render() { 
        return (
            <>
                <ReactFullpage
                    licenseKey={licenseKey}
                    scrollingSpeed={1000}
                    sectionsColor={['#Landing', '#About', '#LetsChat']}
                    navigation={true}
                    onLeave={(origin, destination) => {
                        this.setState({ currentSection: destination.index });
                        if (destination.index === 0) {
                            this.setState({ animationClass: '' });
                        } else {
                            this.setState({ animationClass: 'slide-in' });
                        }
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Landing />
                                </div>
                                <div className="section">
                                    <Build />
                                </div>
                                <div className="section">
                                    <Choose />
                                </div>
                                <div className="section d-sm-block d-none">
                                    <Contact />
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                    tryFullpageError={this.handleFullpageError} // Add the tryFullpageError prop with the error handling function
                />
            </>
        );
    }
}

export default Homepage;
