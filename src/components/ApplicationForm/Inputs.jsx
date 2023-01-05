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
  id,
}) {
  const inputClass = 'input__placeholder' + (fileName ? '--file' : '');

  return (
    <div className="input">
      {label && (
        <label className="input__label" htmlFor={inputClass}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        className={inputClass}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        accept="application/pdf, application/vnd.ms-excel"
        id={id}
      />
      {fileName && (
        <label tabIndex={0} className="input__label--file" htmlFor={id}>
          {fileName}
          <FileUploadSvg className="input__label--file-icon" />
        </label>
      )}
    </div>
  );
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  fileName: PropTypes.node,
};
