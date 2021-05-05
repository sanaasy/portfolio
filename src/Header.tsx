import React from 'react';
import {
  email,
  github,
  linkedin,
  medium,
  logo,
  sanaa
} from './assets';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" style={{ width: '50px', }}/>
      </div>
      <div>
        <img src={sanaa} alt="sanaa syed" style={{ width: '150px', }}/>
      </div>
      <article>
        <p>
          Hi, I&apos;m Sanaa Syed.
        </p>
        <ul>
          <li>
            <a
              href="https://www.github.com/sanaasy"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <img src={github} alt="github" style={{ width: '50px', }}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sanaasy/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <img src={linkedin} alt="linkedin" style={{ width: '50px', }}/>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@sanaasyed"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
            >
              <img src={medium} alt="medium" style={{ width: '50px', }}/>
            </a>
          </li>
          <li>
            <a
              href="mailto:sanaasyed.t@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <img src={email} alt="email" style={{ width: '50px', }}/>
            </a>
          </li>
        </ul>
      </article>
    </header>
  );
};

export default Header;