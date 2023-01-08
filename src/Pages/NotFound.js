import React from "react";
import CustomLink from "../components/Link/CustomLink";
import "./not-found.scss";

import { assets } from '../assets/svg/assets';

const { Computer404, CordLeft, CordRight } = assets;

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
            <h1 className="not-found-page__header">OOPS! Looks like you have disconnected from The Source..</h1>
            <div className="not-found-page__container">
              <div className="not-found-page__computer-svg"><Computer404 width="70rem" /></div>
              <div className="not-found-page__svg-cord-left"><CordLeft height="15rem"/></div>
              <div className="not-found-page__svg-cord-right"><CordRight height="15rem"/></div>
              <div className="not-found-page__link">
                <CustomLink to="/" theme="primary">Connect</CustomLink>
              </div>
            </div> 
            </div>
  );
};

export default NotFoundPage;