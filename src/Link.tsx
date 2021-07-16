import React, {HTMLProps} from 'react';
import styles from './styles/Link.module.css';

interface Props extends Omit<HTMLProps<HTMLAnchorElement>, 'href'> {
  href: string;
  text: string;
}

const Link = ({href, text, ...props}: Props) => {
  return (
    <a href={href} className={styles.Link} {...props}>
      <span data-content={text}>{text}</span>
    </a>
  );
};

export default Link;
