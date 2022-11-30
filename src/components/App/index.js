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

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/sourcery-for-developers',
    element: <AcademyDevelopers />,
  },
  {
    path: '/sourcery-for-testers',
    element: <AcademyTesters />,
  },
  {
    path: '/sourcery-for-front-end',
    element: <AcademyFrontEnd />,
  },
  {
    path: '/sourcery-for-kids',
    element: <AcademyKids />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/questions',
    element: <Questions />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

export default function App({ prop }) {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
