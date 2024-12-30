import React from 'react';
import { Section } from './Section';

export const ContactSection = () => (
  <Section
    title="Contact Information"
    items={[
      {
        label: 'Address',
        status: 'success',
        message: 'You provided your physical address. Recruiters use your address to validate your location for job matches.',
      },
      {
        label: 'Email',
        status: 'success',
        message: 'You provided your email. Recruiters use your email to contact you for job matches.',
      },
      {
        label: 'Phone',
        status: 'success',
        message: 'You provided your phone number.',
      },
    ]}
  />
);
