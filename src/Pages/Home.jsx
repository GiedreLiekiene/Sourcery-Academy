import React, { useState } from 'react';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import Academies from '../components/Academies/Academies';
import TextButtonContainer from '../components/TextButtonContainer/TextButtonContainer';
import TestimonialsContent from '../components/TestimonialsContent/TestimonialsContent';
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
  const [data, setData] = useState(academyInformation);

  return (
    <>
      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextButtonContainer
              title="Sourcery Academy"
              buttonName="View academies"
              text="Sourcery academy is our free of charge education program created to allow students to improve their skills and prepare for a career in the IT industry. There are three academies available. They serve as our long- term commitment to increase the number of students in Lithuania entering information technologies studies."
            />
          }
          rightChild={
            <>
              <WalkingToLaptopImg />
            </>
          }
          alignCenter
        ></TextImgContainer>
      </div>

      <Academies />

      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextButtonContainer
              headingLevel={2}
              title="Sourcery for Developers"
              buttonName="Learn more"
              text={getAcademyInfo('intro', 'Sourcery for Developers')}
            />
          }
          rightChild={<ImageHolder image={<WorkingWithLaptop />} />}
        ></TextImgContainer>
        <div className="section-group__first-wave">
          <FirstWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<ImageHolder right image={<MacWithHammer />} />}
          rightChild={
            <TextButtonContainer
              alignRight
              headingLevel={2}
              title="Sourcery for Testers"
              buttonName="Learn more"
              text={getAcademyInfo('intro', 'Sourcery for Testers')}
            />
          }
          alignRight
        ></TextImgContainer>
        <div className="section-group__second-wave">
          <SecondWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<ImageHolder right image={<WebTechAbbr />} />}
          rightChild={
            <TextButtonContainer
              headingLevel={2}
              title="Sourcery for Front-End"
              alignRight
              buttonName="Learn more"
              text={getAcademyInfo('intro', 'Sourcery for Front-End')}
            />
          }
          alignRight
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextButtonContainer
              headingLevel={2}
              title="Sourcery for Kids"
              buttonName="Learn more"
              text={getAcademyInfo('intro', 'Sourcery for Kids')}
            />
          }
          rightChild={<ImageHolder image={<WorkingAtDeskKidRobot />} />}
        ></TextImgContainer>
        <div className="section-group__third-wave">
          <ThirdWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <CardContainer title="Testimonials" right>
          <TestimonialsContent />
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
