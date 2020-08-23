import React, { Component } from 'react';
import styles from './Navbar.module.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            symbol:'&equiv;',
            show_hide_menu:'none'
        }
    }
    createMarkUp=()=>{
        return {__html: this.state.symbol};
    }
    menuSymbol=()=>{
        return <div className={styles.navSymbol} dangerouslySetInnerHTML={this.createMarkUp()}/>
    }
    handleClick=e=>{
        e.preventDefault();
        this.state.symbol==='&equiv;' ? this.setState({symbol:'&times;'}) : this.setState({symbol:'&equiv;'})
        this.state.show_hide_menu==='block' ? this.setState({show_hide_menu:'none'}) : this.setState({show_hide_menu:'block'});
       
    }
    render() {
        return (
            <div className={styles.navbar} onClick={this.handleClick}>
                {this.menuSymbol()}
                <div className={styles.nav} style={{display:this.state.show_hide_menu}}>
                    <ul className={styles.menu}>
                        <li><a className={styles.menu_item} href="/">Главная</a></li>
                        <li><a className={styles.menu_item} href="/">О мне</a></li>
                        <li><a className={styles.menu_item} href="/">Галерея</a></li>
                        <li><a className={styles.menu_item} href="/">Отзывы</a></li>
                        <li><a className={styles.menu_item} href="/">Генератор</a></li>
                        <li><a onClick={this.props.onScroll} className={styles.menu_item} href="/">Контакты</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;