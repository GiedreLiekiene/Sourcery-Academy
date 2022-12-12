import React from 'react';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import Academies from '../components/Academies/Academies';
import TestimonialsContainer from '../components/TestimonialsContainer/TestimonialsContainer';
import CardContainer from '../components/CardContainer/CardContainer';
import MediaContainer from '../components/MediaContainer/MediaContainer';
import ImageHolder from '../components/ImageHolder/ImageHolder';
import academyInformation from '../utils/academyInformation.json';
import { assets } from '../assets/svg/assets';
import { SvgList } from '../assets/svg/index';
import './home.scss';

const {
  WalkingToLaptopImg,
  WorkingWithLaptop,
  WorkingAtDeskKidRobot,
  WebTechAbbr,
  MacWithHammer,
} = assets;

const { FirstWaveSvg, SecondWaveSvg, ThirdWaveSvg, FourthWaveSvg } = SvgList;

function getAcademyInfo(key, academy) {
  return academyInformation
    .filter((item) => item.academy === academy)
    .map((item) => item[key])
    .toString();
}
function Home() {
  return (
    <>
      <div className="section-group">
        <TextImgContainer
          leftChild={<div></div>}
          rightChild={<WalkingToLaptopImg />}
          alignCenter
        ></TextImgContainer>
      </div>

      <Academies />

      <div className="section-group">
        <TextImgContainer
          leftChild={<div></div>}
          rightChild={<ImageHolder image={<WorkingWithLaptop />} />}
        ></TextImgContainer>
        <div className="section-group__first-wave">
          <FirstWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<ImageHolder right image={<MacWithHammer />} />}
          rightChild={<div></div>}
          alignRight
        ></TextImgContainer>
        <div className="section-group__second-wave">
          <SecondWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<ImageHolder right image={<WebTechAbbr />} />}
          rightChild={<div></div>}
          alignRight
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<div></div>}
          rightChild={<ImageHolder image={<WorkingAtDeskKidRobot />} />}
        ></TextImgContainer>
        <div className="section-group__third-wave">
          <ThirdWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <CardContainer title="Testimonials" right>
          <TestimonialsContainer academy="Random" />
        </CardContainer>
      </div>

      <div className="section-group">
        <CardContainer title="Media">
          <MediaContainer />
        </CardContainer>
        <div className="section-group__fourth-wave">
          <FourthWaveSvg />
        </div>
      </div>
    </>
  );
}
export default Home;
