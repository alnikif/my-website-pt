import React, { Component } from 'react';
import styles from './Navbar.module.css';

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
        const {onScrollContact, onScrollGenerator, onScrollGallery}=this.props
        return (
            <div className={styles.navbar} onClick={this.handleClick}>
                {this.menuSymbol()}
                <div className={styles.nav} style={{display:this.state.show_hide_menu}}>
                    <ul className={styles.menu}>
                        <li className={styles.menu_item} href="/">Главная</li>
                        <li className={styles.menu_item} href="/">О мне</li>
                        <li onClick={onScrollGallery} className={styles.menu_item} href="/">Галерея</li>
                        <li className={styles.menu_item} href="/">Отзывы</li>
                        <li onClick={onScrollGenerator} className={styles.menu_item}>Генератор</li>
                        <li onClick={onScrollContact} className={styles.menu_item}>Контакты</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;