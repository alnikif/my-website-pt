import React, { Component } from 'react';
import styles from'./Footer.module.css';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.form}>
                    <p>Напишите мне</p>
                    <form action="">
                        <input className={styles.inpt} type="email" placeholder='Эл. почта'/>
                        <input className={styles.inpt} type="text" placeholder='Имя'/>
                        <input className={styles.inpt} style={{height:'70px'}} type="text" placeholder='Сообщение'/>
                    </form>
                    <button className={styles.btn} onClick={this.handleClick}>Готово!</button>
                </div>
                <div className={styles.adress}>
                    <div className={styles.location}>
                        <p className ={styles.contactText}>
                             <i class="fa fa-map-marker" aria-hidden="true"></i>
                             Nowogrodzka 50/54, Warszawa, Polska
                        </p>
                    </div>
                    <div className={styles.location}>
                        <p className ={styles.contactText}>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            +48 883 973 602
                        </p>
                    </div>
                
        
                    
               

                </div>
               

                
            </div>
        )
    }
}
