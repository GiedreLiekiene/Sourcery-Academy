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
  isFile,
  id,
  inputPlaceholder = 'Upload your resume',
}) {
  const handleUpload = (e) => {
    if (e.key === 'Enter') {
      inputRef.click();
    }
  };

  const inputClass = 'input' + (isFile ? '__file' : '');
  const accept = isFile ? 'application/pdf, application/vnd.ms-excel' : '';
  let inputRef;
  return (
    <div>
      {label && <label className="input__label">{label}</label>}
      <input
        type={type}
        value={value}
        className={inputClass}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
        id={id}
        required
        ref={(refParam) => (inputRef = refParam)}
      />
      {isFile && (
        <label
          tabIndex={0}
          onKeyDown={handleUpload}
          className="input input__file-label"
          htmlFor={id}
        >
          {inputPlaceholder}
          <FileUploadSvg className={`${inputClass}-icon`} />
        </label>
      )}
      {isFile && <div className="input__uploaded">{isFile}</div>}
    </div>
  );
}
Input.propTypes = {
  inputPlaceholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
  isFile: PropTypes.node,
};
