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
      <div className = 'modal' onClick={close}>
        <div className = 'modal--children' onClick={e => {e.stopPropagation();}}>
          {children}
        </div>
      </div>,document.body):null
  );
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  close: PropTypes.bool,
};
