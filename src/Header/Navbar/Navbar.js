import React, { Component } from 'react';
import styles from './Navbar.module.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            symbol:'&equiv;'
        }
    }
    createMarkUp=()=>{
        return {__html: this.state.symbol};
    }
    menuSymbol=()=>{
        return <div className={styles.navSymbol} dangerouslySetInnerHTML={this.createMarkUp()}/>
    }
    handleClick=e=>{
        this.state.symbol==='&equiv;' ? this.setState({symbol:'&times;'}) : this.setState({symbol:'&equiv;'})
    }
    render() {
        return (
            <div className={styles.navbar} onClick={this.handleClick}>
               
                   {this.menuSymbol()}
                
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