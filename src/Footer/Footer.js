import React, { Component } from 'react';
import styles from'./Footer.module.css';
import classNames from 'classnames';

export default class Footer extends Component {
    render() {
        return (
            <div ref={this.props.refContact} className={styles.container}>
              <div className={styles.footerText}>Напишите мне</div>
                <div className={styles.form}>
                    
                        <form action="">
                            <input className={styles.inpt} type="email" placeholder='Эл. почта'/>
                            <input className={styles.inpt} type="text" placeholder='Имя'/>
                            <input className={classNames(styles.inpt, styles.textarea)} type="text" placeholder='Сообщение'/>
                        </form>
                        <button className={styles.btn} onClick={this.handleClick}>Готово!</button>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles.location}>
                            <p className ={styles.contactText}>
                                <i className="fa fa-map-marker" aria-hidden={true}></i>
                                Nowogrodzka 50/54, Warszawa, Polska
                            </p>
                        </div>
                        <div className={styles.location}>
                            <p className ={styles.contactText}>
                                <i className="fa fa-phone" aria-hidden={true}></i>
                                +48 883 973 602
                            </p>
                        </div>
                </div>
                <div className={styles.copyright}>
                    <p className={styles.copyrightText}>&copy; Oleksandr Nikiforiak, 2020</p>
                </div>
            </div>
        )
    }
}
