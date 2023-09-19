import { useState } from 'react';
import { Button, Loader } from '../../../../design-system/components/atoms';
import styles from './ContactForm.module.scss';
import { Feedback } from '../../../../design-system/components/molecules';

interface ContactFormData {
  name: string
  email: string
  message: string
}

type ContactFormDataKey = keyof ContactFormData;

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: ''
};

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const inputFields = [
  { type: 'text', name: 'name', placeholder: 'Name', pattern: undefined },
  { type: 'email', name: 'email', placeholder: 'Email', pattern: undefined },
  { type: 'textarea', name: 'message', placeholder: 'Message', pattern: undefined }
];

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as ContactFormDataKey;
    const value = event.target.value;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setIsSubmitted(false);
  };

  const validateFormData = (): ContactFormData => ({
    name: formData.name ? '' : 'Please, fill the field with your name.',
    email: formData.email
      ? emailPattern.test(formData.email)
        ? ''
        : 'Please enter a valid email format.'
      : 'Please, fill the field with your email.',
    message: formData.message ? '' : 'Please, fill the field with your message.'
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = validateFormData();

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmittedData(formData);

    setTimeout(() => {
      setIsLoading(false);
      setFormData(initialFormData);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <form className={styles['contact-form']} onSubmit={handleSubmit} noValidate>
        <fieldset>
          {inputFields.map(({ type, name, placeholder }) => {
            const FormElement = type === 'textarea' ? 'textarea' : 'input';
            const fieldName = name as ContactFormDataKey;
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
        </fieldset>
        <Button type='submit' color='cream' variant='default' text='Submit' />
      </form>
      {isLoading && <Loader color='cream' />}
      {isSubmitted && !isLoading && submittedData && (
        <Feedback color='cream'>
          Thank you for getting in touch, {submittedData.name}! We will contact you soon.
        </Feedback>
      )}
    </>
  );
};
