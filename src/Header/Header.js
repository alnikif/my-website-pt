import React, { Component } from 'react';

import HeaderText from './HeaderText/HeaderText';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.blackWraper}>
                <div className={styles.content}>
                    <HeaderText/>
                </div>
                </div>
               
            </div>
        )
    }
}

export default Header;