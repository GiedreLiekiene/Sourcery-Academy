import React from 'react';


export default function TextImgContainer({leftChild, rightChild }) {
  return (
    <section className="container">
      <div className={"container__left"}>
        <div className={"container__left--child"}>
          {leftChild}
        </div>
      </div>
      <div className={"container__right"}>
        <div className={"container__right--child"}>
          {rightChild}
        </div>
      </div>
    </section>
  );
}


TextImgContainer.propTypes={
  leftChild: PropTypes.node,
  rightChild: PropTypes.node,
};

