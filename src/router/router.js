import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from '../pages/CharacterList';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;