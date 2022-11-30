import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from '../Pages/About';
import Home from '../Pages/Home';
import Media from '../Pages/Media';
import Questions from '../Pages/Questions';
import Register from '../Pages/Register';
import AcademyDevelopers from '../Pages/SourceryForDevelopers';
import AcademyFrontEnd from '../Pages/SourceryForFrontEnd';
import AcademyKids from '../Pages/SourceryForKids';
import AcademyTesters from '../Pages/SourceryForTesters';
import Layout from '~/components/layout/Layout';
import { ROUTES } from '../Pages/Routes';

function Navigate() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.academies} />
      <Route path={ROUTES.forDevelopers} element={<AcademyDevelopers />} />
      <Route path={ROUTES.forTesters} element={<AcademyTesters />} />
      <Route path={ROUTES.forFrontEnd} element={<AcademyFrontEnd />} />
      <Route path={ROUTES.forKids} element={<AcademyKids />} />
      <Route path={ROUTES.media} element={<Media />} />
      <Route path={ROUTES.questions} element={<Questions />} />
      <Route path={ROUTES.register} element={<Register />} />
    </Routes>
  );
}

export default function App({ prop }) {
  return (
    <Router>
      <Layout>{<Navigate />}</Layout>
    </Router>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
