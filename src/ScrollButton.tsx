import React, {useState} from 'react';
import styles from './styles/ScrollButton.module.css'
  
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
      <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className={styles.Button}>
        <div className={styles.Text}>back to the top ⬆️</div>
      </button>
    )
  } else {
    return <div />
  };
}
  
export default ScrollButton;