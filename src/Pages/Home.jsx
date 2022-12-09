import React, { useState } from 'react';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import Academies from '../components/Academies/Academies';
import TextButtonContainer from '../components/TextButtonContainer/TextButtonContainer';
import CardContainer from '../components/CardContainer/CardContainer';
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
          rightChild={<WorkingWithLaptop />}
        ></TextImgContainer>
        <div className="section-group__rightWave">
          <FirstWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<MacWithHammer />}
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
        <div className="section-group__leftWave">
          <SecondWaveSvg />
        </div>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<WebTechAbbr />}
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
          rightChild={<WorkingAtDeskKidRobot />}
        ></TextImgContainer>
        <div className="section-group__rightWave">
          <ThirdWaveSvg />
        </div>
      </div>
      <CardContainer title="Testimonials" right>
        <div></div>
      </CardContainer>
      <CardContainer title="Media">
        <div></div>
      </CardContainer>
    </>
  );
}
export default Home;
