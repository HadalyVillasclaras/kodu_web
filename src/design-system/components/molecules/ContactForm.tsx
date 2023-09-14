import { useState } from 'react';
import { Button } from '../atoms';
import styles from './ContactForm.module.scss';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

const inputConfigs = [
  { type: 'text', name: 'name', placeholder: 'Name', pattern: undefined },
  { type: 'email', name: 'email', placeholder: 'Email', pattern: undefined },
  { type: 'textarea', name: 'message', placeholder: 'Message', pattern: undefined },
];

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    const newErrors: ContactFormData = {
      name: formData.name ? '' : 'Name is required.',
      email: formData.email ? '' : 'Email is required.',
      message: formData.message ? '' : 'Message is required.',
    };

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
    console.log('Form Data:', formData);
  };

  if (isSubmitted) {
    return (
      <div className={styles["thankyou-message"]}>
        Thank you for getting in touch, {formData.name}! We will contact you soon.
      </div>
    );
  }

  return (
    <form className={`${styles[`contact-form`]}`} onSubmit={handleSubmit}>
      <fieldset>
        {inputConfigs.map(({ type, name, placeholder, pattern }) => {
          const FormElement = type === 'textarea' ? 'textarea' : 'input';

          return (
            <div key={name} className={`${styles['input-wrapper']}`}>
              <FormElement
                type={type}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                value={(formData as any)[name]}
                onChange={handleInputChange}
              />
              {errors[name] && <span className={`${styles['error']}`}>{errors[name]}</span>}
            </div>
          );
        })}
      </fieldset>
      <Button type='submit' color='cream' variant='default' text='Submit' />
    </form>
  )
}