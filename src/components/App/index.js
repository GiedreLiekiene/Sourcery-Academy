import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Media from './Media';
import Questions from './Questions';
import Register from './Register';
import AcademyDevelopers from './SourceryForDevelopers';
import AcademyFrontEnd from './SourceryForFrontEnd';
import AcademyKids from './SourceryForKids';
import AcademyTesters from './SourceryForTesters';

export default function App({ prop }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/sourcery-for-developers"
          element={<AcademyDevelopers />}
        />
        <Route path="/sourcery-for-testers" element={<AcademyTesters />} />
        <Route path="/sourcery-for-front-end" element={<AcademyFrontEnd />} />
        <Route path="/sourcery-for-kids" element={<AcademyKids />} />
        <Route path="/media" element={<Media />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
