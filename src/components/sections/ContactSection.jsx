import React from 'react';
    import { Section } from './Section';

    export const ContactSection = ({ analysisData }) => {
      const items = analysisData?.sections
        ? [
            {
              label: 'Address',
              status: analysisData.sections.contact.found.includes('address') ? 'success' : 'error',
              message: analysisData.sections.contact.found.includes('address')
                ? 'Address found in resume'
                : 'No address found in resume',
            },
            {
              label: 'Email',
              status: analysisData.sections.contact.found.includes('email') ? 'success' : 'error',
              message: analysisData.sections.contact.found.includes('email')
                ? 'Email found in resume'
                : 'No email found in resume',
            },
            {
              label: 'Phone',
              status: analysisData.sections.contact.found.includes('phone') ? 'success' : 'error',
              message: analysisData.sections.contact.found.includes('phone')
                ? 'Phone number found in resume'
                : 'No phone number found in resume',
            },
            {
              label: 'LinkedIn',
              status: analysisData.sections.contact.found.includes('linkedin') ? 'success' : 'error',
              message: analysisData.sections.contact.found.includes('linkedin')
                ? 'LinkedIn profile found in resume'
                : 'No LinkedIn profile found in resume',
            },
          ]
        : [];

      return <Section title="Contact Information" items={items} />;
    };
