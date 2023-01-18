import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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
import ApplicationFormSuccess from '../../Pages/ApplicationFormSuccess';
import { ROUTES } from './Routes';

function Routing() {  
  const previousLocation = useRef(null);
  const location = useLocation();
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  useEffect(() => {
      if (!isInitialRender) {
          if (previousLocation.current !== location.pathname) {
              window.scrollTo(0, 0);
          }
      } else {
          setIsInitialRender(false);
      }
      previousLocation.current = location.pathname;
  }, [location]);

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
      <Route
        path={ROUTES.applicationFormSuccess}
        element={<ApplicationFormSuccess />}
      />
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
