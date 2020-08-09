import React, { Component } from 'react';
import styles from './About.module.css';
import Banner from './/Banner/Banner';
import AboutMS from './AboutMS/AboutMS'

class About extends Component {
    render() {
        return (
            <div className={styles.about}>
                <Banner/>
                <AboutMS />
            </div>
        )
    }
}

export default About;