import React from 'react';
import './input.scss';
import FileUploadSvg from '../../assets/svg/icon-upload.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input({
  type = 'text',
  value,
  label,
  name,
  placeholder,
  onChange,
  isFile,
  id,
  fileName,
  error,
  filePlaceholder = 'Upload your resume',
}) {
  let inputRef;
  const handleUpload = (e) => {
    if (e.key === 'Enter') {
      inputRef.click();
    }
  };

  const inputClass = classNames('input', {
    input__file: isFile,
    'input--is-error': error,
  });
  const inputFileClass = classNames('input', 'input__file-label', {
    'input__file-label--red-border': error,
  });
  const accept = isFile ? 'application/pdf, application/vnd.ms-excel' : '';

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
          className={inputFileClass}
          htmlFor={id}
        >
          {filePlaceholder}
          <FileUploadSvg className={'input--iconic'} />
        </label>
      )}
      {isFile && <div className="input__uploaded">{fileName}</div>}
      {error && type === 'text' && (
        <div className="input__error">
          {label} is incorrect. Do not use numbers please.{' '}
        </div>
      )}
      {error && type === 'email' && (
        <div className="input__error">{label} is incorrect. Use @ please. </div>
      )}
      {error && type === 'file' && (
        <div className="input__error">
          {label} is not uploaded. Upload please.{' '}
        </div>
      )}
    </div>
  );
}
Input.propTypes = {
  error: PropTypes.bool,
  fileName: PropTypes.node,
  filePlaceholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isFile: PropTypes.bool,
};
