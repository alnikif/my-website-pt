import React, { Component } from 'react';
import styles from './Navbar.module.css'

class Navbar extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         burgerSymbol:'&#9776;'
    //     }
    // }
    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.nav}>
                    <ul className={styles.menu}>
                        <li><a className={styles.menu__item} href="/">Главная</a></li>
                        <li><a className={styles.menu__item} href="/">О мне</a></li>
                        <li><a className={styles.menu__item} href="/">Галерея</a></li>
                        <li><a className={styles.menu__item} href="/">Отзывы</a></li>
                        <li><a className={styles.menu__item} href="/">Генератор</a></li>
                        <li><a className={styles.menu__item} href="/">Контакты</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;