import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import TextImgContainer from '../TextImgContainer/TextImgContainer';
import './admission.scss';

function Admission() {
  return (
    <div className="admission">
      <CardContainer title="The Admission">
        <TextImgContainer leftChild="Text" rightChild="Image" />
      </CardContainer>
    </div>
  );
}

export default Admission;
