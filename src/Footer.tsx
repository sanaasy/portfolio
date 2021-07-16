import React from 'react';
import styles from './styles/Footer.module.css';
import Link from './Link';

const Footer = () => {
  return (
    <span className={styles.Footer}>
      {/* <div className={styles.Connect}>Let's connect!</div> */}
      <div className={styles.Subtitle}>Email me at {' '}
        <Link
          href="mailto:sanaasyed.t@gmail.com"
          text="sanaasyed.t@gmail.com"
          target="_blank"
          rel="noopener"
          aria-label="Email"
        />
      </div>
    </span>
  )
}

export default Footer;