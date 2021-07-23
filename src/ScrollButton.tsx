import React, {useState} from 'react';
import styles from './styles/ScrollButton.module.css'
import {
  github,
  linkedin,
  medium,
} from './assets';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  if(visible){
    return (
      <span>
        <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className={styles.Button}>
          <div className={styles.Text}>back to the top ⬆️</div>
        </button>

        <div>
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
          </ul>
        </div>
      </span>
    )
  } else {
    return <div />
  };
}
  
export default ScrollButton;