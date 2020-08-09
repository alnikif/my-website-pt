import React, { Component } from 'react'
import styles from './Logo.module.css'

class Logo extends Component {
    render() {
        return (
            <h3 className={styles.logo}>Александр Штурм</h3>
        )
    }
}

export default Logo