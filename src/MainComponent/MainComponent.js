import React, { Component } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Logo from '../Header/Logo/Logo';
import Header from '../Header/Header';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Generator from '../Generator/Generator'
import styles from './MainComponent.module.css';

class MainComponent extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <Logo />
                    <Navbar />
                </div>
                <Header />
                <About />
                <Gallery />
                <Generator />
                
            </div>
        )
    }
}

export default MainComponent;