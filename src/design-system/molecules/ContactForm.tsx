import { useState } from 'react';
import { Button } from '../atoms';
import styles from './ContactForm.module.scss';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    setFormData(initialFormData);
  };
  
  return (
    <form className={`${styles[`contact-form`]}`} onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="^\d{10}$"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <Button type='submit' text='Submit' />
        </form>
  )
}

export default ContactForm