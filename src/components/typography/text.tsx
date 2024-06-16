import './text.scss';

import React from 'react';

const Heading: React.FC<
  {
    variant: 20 | 24 | 28 | 32 | 36;
    children: React.ReactNode;
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ variant, children, ...props }) => {
  return (
    <p className={`text_heading_${variant}`} {...props}>
      {children}
    </p>
  );
};

const Title: React.FC<
  { variant: 14 | 16 | 18 | 20 | 22 | 24; children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ variant, children, ...props }) => {
  return (
    <p className={`text_heading_${variant}`} {...props}>
      {children}
    </p>
  );
};

const Body: React.FC<
  { variant: 10 | 12 | 14 | 16 | 18 | 20; children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ variant, children, ...props }) => {
  return (
    <p className={`text_heading_${variant}`} {...props}>
      {children}
    </p>
  );
};

const Text = {
  Heading,
  Title,
  Body,
};

export default Text;
