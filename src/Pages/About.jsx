import React from 'react';
import './about.scss';
import TextImgContainer from '../components/TextImgContainer/TextImgContainer';
import TextActionContainer from '../components/TextActionContainer/TextActionContainer';
import { ThemeProvider } from '../utils/ThemeContext';
import { assets } from '../assets/svg/assets';

const {
  Paulina,
  Giedre,
  Arturas,
  Aukse,
  Linas,
} = assets;

function About() {
  return(
    <ThemeProvider theme="primary">
      <div className="banner">
        <img className="banner__image" src='https://i.ibb.co/X3FWZNM/codefather01.png' />
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextActionContainer
              title="Paulina"
              text="I used to be very hyped about exploring abandoned buildings until I fell from third floor and now in my spare time I make rugs and enjoy long walks with my lovely dog."
              boldMainText
              forceWrapTitle
            />
          }
          rightChild={<Paulina />}
          alignCenter
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<Giedre />}
          alignCenter
          rightChild={
            <TextActionContainer
              title="Giedrė"
              text="I played basketball for more than 12 years of my life, 4 times Lithuanian champion and also had an offer to play for the National basketball team of Great Britain during my studies there."
              alignRight
              boldMainText
              forceWrapTitle
            />
          }
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextActionContainer
              title="Artūras"
              text="I dance and teach lindy-hop for 9 years. Once I won an endurance competition where I danced for 15 minutes non-stop. The top speed of music was 345 beats per minute."
              boldMainText
              forceWrapTitle
            />
          }
          rightChild={<Arturas />}
          alignCenter
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={<Aukse />}
          alignCenter
          rightChild={
            <TextActionContainer
              title="Auksė"
              text="While traveling through Caribbeans, I learned Spanish and to dance bachata. So now I do both at the same time."
              alignRight
              forceWrapTitle
              boldMainText
            />
          }
        ></TextImgContainer>
      </div>

      <div className="section-group">
        <TextImgContainer
          leftChild={
            <TextActionContainer
              title="Linas"
              text="I dance salsa for 8 years. In my spare time from coding and dancing I make wine."
              forceWrapTitle
              boldMainText
            />
          }
          rightChild={<Linas />}
          alignCenter
        ></TextImgContainer>
      </div>
    </ThemeProvider>
  );
}
export default About;
