import React from 'react';
import styles from './Logo.module.css';

const Logo=()=> {
   const scrollToTop=()=>{
        window.scrollTo({top:0, behavior:'smooth'});
    }
    return (
        <div onClick={scrollToTop} className={styles.logo}>Александр Штурм</div>
    )
}

export default Logo