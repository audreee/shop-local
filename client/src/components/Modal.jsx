import React from 'react';

const Modal = (props) => {
  return (
    props.show &&
    <div className="flex-row modal" onClick={props.handleClose}>
      <div className="fadeIn modalContent" onClick={e => e.stopPropagation()}>
          <button className="modalCloseButton" onClick={props.handleClose}><i className={`fas fa-times fa-lg`}></i></button>
          {props.children}
      </div>
    </div>
  );
};

export default Modal;
