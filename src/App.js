import React from 'react';

import Nav from './nav.js';
import Navbar from './Navbar.js';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
    return (
        <Router>
          <Navbar />
        </Router>
    );
}

export default App