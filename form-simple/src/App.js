import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<Form />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;