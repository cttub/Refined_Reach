
import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Routes } from 'react-router-dom';

import TagManager from 'react-gtm-module';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import Landing from './Components/Landing';
import Build from './Components/Build';
import Choose from './Components/Choose';
import Homepage from './Components/Homepage';
import Contact from './Components/Contact';

function App() {
  React.useEffect(() => {
    TagManager.initialize({
      gtmId: ''
    });
  }, []);
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="Contact" element={<Contact />} />
    
      </Route>
    </Routes>
  </HashRouter>

  );
}

export default App;
