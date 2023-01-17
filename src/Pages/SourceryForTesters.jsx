import React from 'react';
import TestimonialsContainer from '../components/TestimonialsContainer/TestimonialsContainer';
import VideoBox from '../components/VideoBox/VideoBox';
import CustomLink from '../components/Link/CustomLink';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import TextActionContainer from '../components/TextActionContainer/TextActionContainer';
import CardContainer from '../components/CardContainer/CardContainer';
import ScheduleContainer from '../components/ScheduleContainer/ScheduleContainer';
import WaveContainer from '../components/WaveContainer/WaveContainer';
import MediaContainer from '../components/MediaContainer/MediaContainer';
import academyInformation from '../utils/academyInformation.json';
import ProcessContainer from '../components/ProcessContainer/ProcessContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import { ROUTES } from '../components/App/Routes';
import { SvgList } from '../assets/svg';
import { assets } from '../assets/svg/assets';
import './academies.scss';

const { register } = ROUTES;

const { ApplyTesters } = assets;

function getAcademyInfo(key, academy) {
  return academyInformation
    .filter((item) => item.academy === academy)
    .map((item) => item[key])
    .toString();
}
function AcademyTesters() {
  return (
    <ThemeProvider theme="tertiary">
      <div className="section-group section-group--first">
        <TextImgContainer
                leftChild={
                  <div className='section-group__text-wrapper'>
                    <TextActionContainer
                    title={getAcademyInfo('title', 'Sourcery for Testers')}
                    text={getAcademyInfo('slogan', 'Sourcery for Testers')}
                    >
                      <CustomLink to={register}>Register</CustomLink>
                    </TextActionContainer>
                  </div>
                }
                rightChild={
                  <div className='section-group__video-box-wrapper'>
                    <VideoBox thumbnail='https://sfe-2022-data.netlify.app/static/video/developers/thumbnails/47110170574_c00cc2b54d_k-1.jpg' videoSrc='https://sfe-2022-data.netlify.app/static/video/developers/80b0058a9428314582a3f25f3b1dfb8bc27de8a4.mp4' />
                  </div>           
                }
          />
          <div className="section-group__wave section-group__wave--register-wave">
            <WaveContainer>            
              <SvgList.RegisterWaveSvg />
            </WaveContainer>
          </div>
          <div className="section-group__wave section-group__wave--video-wave">
            <WaveContainer>
              <SvgList.VideoWaveSvg />
            </WaveContainer>
          </div>
      </div>

      <div className='section-group'>
          <ProcessContainer academy='Sourcery for Testers'/>
          <div className="section-group__wave section-group__wave--process-wave">
            <WaveContainer>            
              <SvgList.ProcessWaveSvg />
            </WaveContainer>
          </div>
      </div>

      <div className='section-group'>
        <CardContainer title="Schedule" center>
          <ScheduleContainer academy="Sourcery for Testers" />
        </CardContainer>
        <div className="section-group__wave section-group__wave--schedule-wave">
          <WaveContainer>
            <SvgList.ScheduleWaveSvg />
          </WaveContainer>
        </div>
      </div>

      <div className="section-group">
        <CardContainer title="Testimonials" right>
          <TestimonialsContainer academy="Sourcery for Testers Graduate" />
        </CardContainer>
      </div>

      <div className="section-group">
        <CardContainer title="Media">
          <MediaContainer academy={'testers'} shouldUseExtended={true} />
        </CardContainer>
        <div className="section-group__wave section-group__wave--media-wave">
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
              text={getAcademyInfo('apply', 'Sourcery for Testers')}
              boldMainText
            >                
                <CustomLink to={register}>Apply now</CustomLink>
            </TextActionContainer>
          }
          rightChild={<ApplyTesters/>}
          alignCenter
        ></TextImgContainer>
        <div className="section-group__wave section-group__wave--apply-wave">
          <WaveContainer>
            <SvgList.ApplyWaveSvg />
          </WaveContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default AcademyTesters;
