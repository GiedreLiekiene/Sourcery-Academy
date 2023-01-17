import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './application-form.scss';
import Input, { errorMessage } from './Input';
import Checkbox from '~/components/CheckBox/CheckBox';
import Button from '~/components/Buttons/Button';
import Selection from '~/components/ApplicationForm/Selection';
import RadioInput from '~/components/ApplicationForm/RadioInput';
import classNames from 'classnames';
import { ThemeContext } from '~/utils/ThemeContext';

export default function ApplicationForm() {
  const [form, setForm] = useState(getFormValues);

  const [isFile, setIsFile] = useState();

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onFileChange = (e) => {
    return setIsFile(e.target.value);
  };
  let fileName;
  fileName = isFile ? <span>{isFile}</span> : <span></span>;

  const onChange = (e) => {
    const { value, name } = e.target;
    const isCheckbox = e.target.type === 'checkbox';
    setForm((state) => ({
      ...state,
      [name]: isCheckbox ? e.target.checked : value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('Form', JSON.stringify('form'));
  }, [form]);

  function getFormValues() {
    const storedValues = localStorage.getItem('Form');
    if (!storedValues)
      return {
        academy: '',
        city: '',
        name: '',
        lastName: '',
        email: '',
        resume: [],
        checkbox: false,
      };
    return JSON.parse(storedValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.academy === '' ||
      form.city === '' ||
      form.name === '' ||
      form.lastName === '' ||
      form.email === '' ||
      form.resume === [] ||
      form.checkbox === false
    ) {
      setError(true);
    } else if (
      !form.name.match(/^[a-zA-Z]+$/) ||
      !form.lastName.match(/^[a-zA-Z]+$/) ||
      !form.email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setError(true);
    } else {
      navigate('/application-form-success');
    }
  };

  const { theme } = useContext(ThemeContext);

  const headerClass = classNames(
    'application-form__title-info',
    `application-form__title-info--${theme}`
  );

  return (
    <div className="application-form">
      <form id="application-form" className="application-form__wrapper">
        <h2 className={headerClass}>Academy information</h2>

        <div className="application-form__wrapper">
          <label className="application-form__label">Academy type</label>
          <Selection onChange={onChange} />
        </div>

        <div className="application-form__wrapper">
          <label className="application-form__label">Academy city</label>
          <RadioInput
            name="city"
            label="Vilnius"
            value="Vilnius"
            id="Vilnius"
            onChange={onChange}
          />
          <RadioInput
            name="city"
            label="Kaunas"
            value="Kaunas"
            id="Kaunas"
            onChange={onChange}
          />
        </div>

        <div className="application-form__wrapper">
          <h2 className={headerClass}>Personal information</h2>
          <div className="application-form__wrapper--less-margin">
            <Input
              id="name"
              value={form.name}
              placeholder="Enter your first name"
              label="First name"
              name="name"
              onChange={onChange}
            />
          </div>

          <div className="application-form__wrapper--less-margin">
            <Input
              id="lastName"
              value={form.lastName}
              placeholder="Enter your last name"
              label="Last name"
              name="lastName"
              onChange={onChange}
            />
          </div>

          <div className="application-form__wrapper--less-margin">
            <Input
              id="email"
              type="email"
              value={form.email}
              placeholder="Enter your email"
              label="Email"
              name="email"
              onChange={onChange}
            />
          </div>

          <div className="application-form__wrapper--less-margin">
            <Input
              type="file"
              value={form.resume}
              label="Resume"
              name="resume"
              onChange={onFileChange}
              isFile={fileName}
              id="file"
              fileName
            />
          </div>
        </div>

        <div className="application-form__wrapper">
          <Checkbox
            type="checkbox"
            name="checkbox"
            checked={form.checkbox}
            onChange={onChange}
            label="I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application."
            id="checkbox"
          />
        </div>

        {error ? <div>{errorMessage()}</div> : <div></div>}

        <div className="application-form__wrapper">
          <Button
            onClick={handleSubmit}
            type="submit"
            htmlFor="application-form"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
