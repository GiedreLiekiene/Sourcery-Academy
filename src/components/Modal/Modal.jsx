import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import './modal.scss';
import PropTypes from "prop-types";

const Modal =({open, close, children })=>{

  const closeOnEsc = (e) =>{
    if((e.charCode||e.keyCode)===27){
      close();
    }
  }

  useEffect(()=>{
    document.body.addEventListener('keydown',closeOnEsc);
    return function cleanup(){
      document.body.removeEventListener('keydown',closeOnEsc)
    }
  },[])


  return (
    open? ReactDOM.createPortal(
      <div>
      <button className="modal__overlay" onClick={close}></button>
      <div className = "modal" >
          {children}
      </div>
      </div>,document.body):null
  );
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  close: PropTypes.func,
};
