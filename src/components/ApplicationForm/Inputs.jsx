import React from 'react';
import './inputs.scss';
import FileUploadSvg from '../../assets/svg/icon-upload.svg';
import PropTypes from 'prop-types';

export const errorMessage = () => {
  return <div className="input__error">Please enter all the fields</div>;
};

export default function Input({
  type = 'text',
  value,
  label,
  name,
  placeholder,
  onChange,
  fileName,
}) {
  const inputClassId = 'input' + (fileName ? '__file' : '__text');

  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={inputClassId}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        className={inputClassId}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        accept="application/pdf, application/vnd.ms-excel"
        id={inputClassId}
      />
      {fileName && (
        <label
          tabIndex={0}
          className="input__file--label"
          htmlFor="input__file"
        >
          {fileName}
          <FileUploadSvg className="input__file--icon" />
        </label>
      )}
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  fileName: PropTypes.node,
};
