import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {
  email,
  github,
  linkedin,
  medium,
  logo,
  sanaa
} from './assets';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <span>
      <div>
          <img src={logo} alt="logo" className={styles.Logo} />
      </div>
      <header id={styles.Header}>
        <a className={styles.Resume} href="/resume.pdf">
          check out my <strong>resume</strong>
        </a>
        <div className={styles.ImgContainer}>
          <img src={sanaa} alt="sanaa syed" className={styles.Img} />
        </div>
        <article>
          <div className={styles.TextContainer}>
            <p className={styles.Title}>
              Hi, I&apos;m Sanaa Syed.
            </p>
            <p className={styles.TypedText}>
              <ReactTypingEffect
                text={["Software Developer @ Shopify"]}
                speed={100}
                typingDelay={1000}
                eraseSpeed={100}
             />
            </p>
          </div>
          <ul className={styles.Link}>
            <li className={styles.Social}>
              <a
                href="https://www.linkedin.com/in/sanaasy/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <img src={linkedin} alt="linkedin"/>
              </a>
            </li>
            <li className={styles.Social}>
              <a
                href="https://www.github.com/sanaasy"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <img src={github} alt="github"/>
              </a>
            </li>
            <li className={styles.Social}>
              <a
                href="https://medium.com/@sanaasyed"
                target="_blank"
                rel="noreferrer"
                aria-label="Medium"
              >
                <img src={medium} alt="medium"/>
              </a>
            </li>
            {/* <li className={styles.Social}>
              <a
                href="mailto:sanaasyed.t@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <img src={email} alt="email"/>
              </a>
            </li> */}
          </ul>
        </article>
      </header>
    </span>
  );
};

export default Header;