import React from 'react';
import styles from './Feedback.module.scss';
import { type Colors } from '../../tokens';

interface FeedbackProps {
  children: React.ReactNode
  color?: Colors
}

export const Feedback = ({ color = 'green', children }: FeedbackProps) => {
  const feedbackColor = styles[`${`feedback__color--${color}`}`];
  return (
    <section className={`${styles.feedback} ${feedbackColor}`}>
      {children}
    </section>
  );
};
