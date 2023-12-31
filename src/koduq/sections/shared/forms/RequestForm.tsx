import React, { useEffect, useState } from 'react';
import styles from './RequestForm.module.scss';
import { Button, Loader } from '../../../../design-system/components/atoms';
import { Feedback } from '../../../../design-system/components/molecules';

interface RequestFormData {
  name: string
  email: string
  phone: string
  field1: string
  field2: string
  field3: string
}

type RequestFormDataKey = keyof RequestFormData;

const initialFormData: RequestFormData = {
  name: '',
  email: '',
  phone: '',
  field1: '',
  field2: '',
  field3: ''
};

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const inputFields = [
  { type: 'text', name: 'name', placeholder: 'Name', pattern: undefined },
  { type: 'email', name: 'email', placeholder: 'Email', pattern: undefined },
  { type: 'number', name: 'phone', placeholder: 'Phone number', pattern: undefined },
  { type: 'text', name: 'field1', placeholder: 'Lorem ipsum dolor?', pattern: undefined },
  { type: 'textarea', name: 'field2', placeholder: 'Sit amet', pattern: undefined },
  { type: 'textarea', name: 'field3', placeholder: 'Consectetur adipiscing elit', pattern: undefined }
];

interface RequestFormProps {
  hasClickedBack: boolean,
  isRequestSubmitted: boolean
  setIsRequestSubmitted: (isRequestSubmitted: boolean) => void
}

export const RequestForm = ({ isRequestSubmitted, setIsRequestSubmitted, hasClickedBack }: RequestFormProps) => {
  const [formData, setFormData] = useState<RequestFormData>(initialFormData);
  const [errors, setErrors] = useState<RequestFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<RequestFormData | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as RequestFormDataKey;
    const value = event.target.value;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setIsSubmitted(false);
  };

  const validateFormData = (): RequestFormData => {
    const validateName = () => formData.name ? '' : 'Please, fill this field with your name.';
    const validateEmail = () => {
      if (!formData.email) return 'Please, fill this field with your email.';
      if (!emailPattern.test(formData.email)) return 'Please, enter a valid email format.';
      return '';
    };
    const validatePhone = () => formData.phone ? '' : 'Please, fill this field with your phone number.';
    const validateField = (field: string) => field ? '' : 'Please, fill this field.';

    return {
      name: validateName(),
      email: validateEmail(),
      phone: validatePhone(),
      field1: validateField(formData.field1),
      field2: validateField(formData.field2),
      field3: validateField(formData.field3)
    };
  };

  function resetRequest () {
    setIsSubmitted(false);
    setSubmittedData(null);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validateFormData();

    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.field1 || newErrors.field2 || newErrors.field3) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmittedData(formData);
    setIsRequestSubmitted(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormData(initialFormData);
      setIsSubmitted(true);
    }, 2000);
  };

  useEffect(() => {
    !isRequestSubmitted && resetRequest();
  }, [isRequestSubmitted]);

  useEffect(() => {
    hasClickedBack && setErrors(initialFormData);
  }, [hasClickedBack]);

  return (
    <>
      <form className={`${styles['request-form']} ${styles['contact-form']}`} onSubmit={handleSubmit} noValidate>
        {inputFields.map(({ type, name, placeholder }) => {
          const FormElement = type === 'textarea' ? 'textarea' : 'input';
          const fieldName = name as RequestFormDataKey;
          return (
            <p key={name} className={styles['input-wrapper']}>
              <FormElement
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[fieldName]}
                onChange={handleInputChange}
              />
              <span className={`${styles['input-error']} ${styles[`input-error--${errors[fieldName] ? 'visible' : 'hidden'}`]}`}>{errors[fieldName]}</span>
            </p>
          );
        })}
        <span></span>
        <section className={styles['contact-btn-response']}>
          <Button type='submit' color='green' variant='default' text='Send request' />
          <Loader isActive={isLoading} color='brown' />
          {
            isSubmitted && !isLoading && submittedData &&
            <Feedback isActive={isSubmitted && !isLoading && submittedData !== null} color='brown'>
              Thank you for getting in touch, <b>{submittedData.name}</b>! We will carefully review your request and contact you soon.
            </Feedback>
          }
        </section>
      </form>
    </>

  );
};
