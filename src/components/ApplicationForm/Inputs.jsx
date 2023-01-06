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
  const inputClass = 'input' + (fileName ? '__file' : '');

  return (
    <div>
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
        <label tabIndex={0} className="input input__file-label" htmlFor={id}>
          Upload your resume
          <FileUploadSvg className={`${inputClass}-icon`} />
        </label>
      )}
      {fileName && <div className="input__uploaded">{fileName}</div>}
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
