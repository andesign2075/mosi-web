import React, { useMemo } from 'react';

import styles from './text.module.scss';

const Heading: React.FC<
  {
    variant: 20 | 24 | 28 | 32 | 36;
    children: React.ReactNode;
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ variant, children, ...props }) => {
  const className = useMemo(() => {
    switch (variant) {
      case 20:
        return styles.text_heading_20;
      case 24:
        return styles.text_heading_24;
      case 28:
        return styles.text_heading_28;
      case 32:
        return styles.text_heading_34;
      case 36:
        return styles.text_heading_36;
    }
  }, []);
  return (
    <p className={className} {...props}>
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
  const className = useMemo(() => {
    switch (variant) {
      case 14:
        return styles.text_title_14;
      case 16:
        return styles.text_title_16;
      case 18:
        return styles.text_title_18;
      case 20:
        return styles.text_title_20;
      case 24:
        return styles.text_title_24;
    }
  }, []);

  return (
    <p className={className} {...props}>
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
  const className = useMemo(() => {
    switch (variant) {
      case 10:
        return styles.text_body_10;
      case 12:
        return styles.text_body_12;
      case 14:
        return styles.text_body_14;
      case 16:
        return styles.text_body_16;
      case 18:
        return styles.text_body_18;
      case 20:
        return styles.text_body_20;
    }
  }, []);

  return (
    <p className={className} {...props}>
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
