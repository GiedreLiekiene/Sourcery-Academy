import React, { useState } from 'react';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import Academies from '../components/Academies/Academies';
import TextButtonContainer from '../components/TextButtonContainer/TextButtonContainer';
import CardContainer from '../components/CardContainer/CardContainer';
import TestimonialsContent from '../components/TestimonialsContent/TestimonialsContent';
import academyInformation from '../utils/academyInformation.json';
import { assets } from '../assets/svg/assets';

const {
  WalkingToLaptopImg,
  WorkingWithLaptop,
  WorkingAtDeskKidRobot,
  WebTechAbbr,
  MacWithHammer,
} = assets;

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
        rightChild={<WalkingToLaptopImg />}
        alignCenter
      ></TextImgContainer>
      <Academies />

      <TextImgContainer
        leftChild={
          <TextButtonContainer
            level={2}
            title="Sourcery for Developers"
            buttonName="Learn more"
            text={academyInformation
              .filter((item) => item.academy === 'Sourcery for Developers')
              .map((item) => item.intro)
              .toString()}
          />
        }
        rightChild={<WorkingWithLaptop />}
        alignCenter
      ></TextImgContainer>

      <TextImgContainer
        leftChild={<MacWithHammer />}
        rightChild={
          <TextButtonContainer
            level={2}
            title="Sourcery for Testers"
            alignRight
            buttonName="Learn more"
            text={academyInformation
              .filter((item) => item.academy === 'Sourcery for Testers')
              .map((item) => item.intro)
              .toString()}
          />
        }
        alignRight
      ></TextImgContainer>

      <TextImgContainer
        leftChild={<WebTechAbbr />}
        rightChild={
          <TextButtonContainer
            level={2}
            title="Sourcery for Front-End"
            alignRight
            buttonName="Learn more"
            text={academyInformation
              .filter((item) => item.academy === 'Sourcery for Front-End')
              .map((item) => item.intro)
              .toString()}
          />
        }
        alignRight
      ></TextImgContainer>

      <TextImgContainer
        leftChild={
          <TextButtonContainer
            level={2}
            title="Sourcery for Kids"
            buttonName="Learn more"
            text={academyInformation
              .filter((item) => item.academy === 'Sourcery for Kids')
              .map((item) => item.intro)
              .toString()}
          />
        }
        rightChild={<WorkingAtDeskKidRobot />}
      ></TextImgContainer>

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
