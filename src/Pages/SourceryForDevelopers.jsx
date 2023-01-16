import React from 'react';
import TextActionContainer from '../components/TextActionContainer/TextActionContainer';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import VideoBox from '../components/VideoBox/VideoBox';
import CardContainer from '../components/CardContainer/CardContainer';
import MediaContainer from '../components/MediaContainer/MediaContainer';
import TestimonialsContainer from '../components/TestimonialsContainer/TestimonialsContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import { SvgList } from '../assets/svg/index';
import { assets } from '../assets/svg/assets';

import './academies.scss';
import CustomLink from '../components/Link/CustomLink';
import ImageHolder from '../components/ImageHolder/ImageHolder';
import WaveContainer from '../components/WaveContainer/WaveContainer';

const { ApplyDevelopers } = assets;

function AcademyDevelopers() {
  return (
    <ThemeProvider theme="secondary">
      <div className="section-group">
        <TextImgContainer
            leftChild={
              <TextActionContainer
                title="Sourcery Academy for developers"
                text="Become a software developer with our free of charge three-month academy, available this fall and spring. Work with our top specialists as your mentors and lecturers in Kaunas and Vilnius."
              >
                <div className='action-wrap'>
                  <CustomLink to='/register' theme='secondary'>
                    Register
                  </CustomLink>
                  </div>
              </TextActionContainer>
            }
            rightChild={
              <ImageHolder right image={<VideoBox thumbnail='https://sfe-2022-data.netlify.app/static/video/developers/thumbnails/47110170574_c00cc2b54d_k-1.jpg' videoSrc='https://sfe-2022-data.netlify.app/static/video/developers/80b0058a9428314582a3f25f3b1dfb8bc27de8a4.mp4' />} /> 
           }
          ></TextImgContainer>
          <div className="section-group__register-wave">
            <WaveContainer>            
              <SvgList.RegisterWaveSvg />
            </WaveContainer>
          </div>
          <div className="section-group__video-wave">
          <WaveContainer>
            <SvgList.VideoWaveSvg />
          </WaveContainer>

          </div>
      </div>
      <div className='section-group'>
        <CardContainer title="Schedule" center>
          <ScheduleContainer academy="Sourcery for Developers" />
        </CardContainer>
        <div className="section-group__schedule-wave">
          <WaveContainer>
            <SvgList.ScheduleWaveSvg />
          </WaveContainer>

        </div>
      </div>

      <div className="section-group">
        <CardContainer title="Testimonials" right>
          <TestimonialsContainer academy="Sourcery for Developers Graduate" />
        </CardContainer>
      </div>

      <div className="section-group">
        <CardContainer title="Media">
          <MediaContainer academy={'developers'} />
        </CardContainer>
        <div className="section-group__media-wave">
           <WaveContainer>
            <SvgList.MediaWaveSvg />
           </WaveContainer>

        </div>
      </div>

      <div className="section-group">
      <TextImgContainer
          leftChild={
            <TextActionContainer
              title="Apply to academy"
              text="Entrance test results define a priority list of candidates. We accept 20 candidates with highest marks into academy."
              boldMainText
            >                <div className='action-wrap'>
                  <CustomLink to='/register' theme='secondary'>
                    Apply now
                  </CustomLink>
                  </div>
                  </TextActionContainer>
          }
          rightChild={<ApplyDevelopers />}
          alignCenter
        ></TextImgContainer>
        <div className="section-group__apply-wave">
          <WaveContainer>
            <SvgList.ApplyWaveSvg />
          </WaveContainer>
        </div>


      </div>




    </ThemeProvider>
  );
}
export default AcademyDevelopers;
