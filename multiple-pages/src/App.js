import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;