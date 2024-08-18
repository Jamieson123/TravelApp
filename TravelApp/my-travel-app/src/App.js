// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';  // Import the custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Travel App
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accommodations" element={<AccommodationPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
