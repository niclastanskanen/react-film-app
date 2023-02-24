import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Routes>
        <Route exact path="/movie/:id" element={<h1>Movie id</h1>} />
        <Route exact path="/actors/:id" element={<h1>Actors</h1>} />
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/profile/:id" element={<h1>Profile</h1>} />
      </Routes>
    </main>
  </div>
);

export default App;
