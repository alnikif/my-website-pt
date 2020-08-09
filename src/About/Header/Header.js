import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.content}>
                    <Logo />
                    <Navbar />
                    <HeaderText/>
                </div>
                <Banner />
            </div>
        )
    }
}

export default Header;