import React, { Component } from 'react';
import styles from'./Footer.module.css';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.form}>
                <form action="">
                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/>
                    <input className={styles.inpt} type="text" placeholder='Приседания со штангой'/>
                    <input className={styles.inpt} style={{height:'70px'}} type="text" placeholder='Укажите Ваш вес'/>
                </form>
                <button className={styles.btn} onClick={this.handleClick}>Готово!</button>
                </div>
                <div className={styles.adress}></div>
               

                
            </div>
        )
    }
}
