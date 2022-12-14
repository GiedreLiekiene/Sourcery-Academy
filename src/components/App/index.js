import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from '../../Pages/About';
import Home from '../../Pages/Home';
import Media from '../../Pages/Media';
import Questions from '../../Pages/Questions';
import Register from '../../Pages/Register';
import AcademyDevelopers from '../../Pages/SourceryForDevelopers';
import AcademyFrontEnd from '../../Pages/SourceryForFrontEnd';
import AcademyKids from '../../Pages/SourceryForKids';
import AcademyTesters from '../../Pages/SourceryForTesters';
import NotFound from '../../Pages/NotFound';
import Layout from '~/components/layout/Layout';
import { ROUTES } from './Routes';

function Routing() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />
      <Route path={ROUTES.academies}>
        <Route path={ROUTES.forDevelopers} element={<AcademyDevelopers />} />
        <Route path={ROUTES.forTesters} element={<AcademyTesters />} />
        <Route path={ROUTES.forFrontEnd} element={<AcademyFrontEnd />} />
        <Route path={ROUTES.forKids} element={<AcademyKids />} />
      </Route>
      <Route path={ROUTES.media} element={<Media />} />
      <Route path={ROUTES.questions} element={<Questions />} />
      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
