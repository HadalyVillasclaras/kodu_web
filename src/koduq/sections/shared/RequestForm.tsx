import React, { useState } from 'react'
import styles from './RequestForm.module.scss';
import { Button, Loader } from '../../../design-system/components/atoms';
import { Feedback } from '../../../design-system/components/molecules';

interface RequestFormData {
  name: string;
  email: string;
  phone: string;
  field1: string;
  field2: string;
  field3: string;
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
  { type: 'textarea', name: 'field3', placeholder: 'Consectetur adipiscing elit', pattern: undefined },
];

export const RequestForm = () => {
  const [formData, setFormData] = useState<RequestFormData>(initialFormData);
  const [errors, setErrors] = useState<RequestFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as RequestFormDataKey;
    const value = event.target.value;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setIsSubmitted(false);

  };

  const validateFormData = (): RequestFormData => ({
    name: formData.name ? '' : 'Please, fill the field with your name.',
    email: formData.email
      ? emailPattern.test(formData.email)
        ? ''
        : 'Please enter a valid email format.'
      : 'Please, fill the field with your email.',
    phone: formData.phone ? '' : 'Please, fill the field with your phone number.',
    field1: formData.field1 ? '' : 'Please, fill this field.',
    field2: formData.field2 ? '' : 'Please, fill this field.',
    field3: formData.field3 ? '' : 'Please, fill this field.',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = validateFormData();

    if (newErrors.name || newErrors.email || newErrors.phone || newErrors.field1 || newErrors.field2 || newErrors.field3) {
      setErrors(newErrors);
      return;
    }

    console.log('Form Data:', formData);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormData(initialFormData);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
    <form className={styles['contact-form']} onSubmit={handleSubmit} noValidate>
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
      <Button type='submit' color='green' variant='default' text='Send request' />
    </form>
     {isLoading && <Loader color='brown' />}
     {isSubmitted && !isLoading && (
       <Feedback color='brown'>
         Thank you for getting in touch, {formData.name}! We will contact you soon.
       </Feedback>
     )}
    </>

  )
}