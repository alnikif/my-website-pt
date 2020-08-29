import React, { Component } from 'react';
import styles from './About.module.css';
import Banner from './/Banner/Banner';
import AboutMS from './AboutMS/AboutMS'

class About extends Component {
    render() {
        return (
            <div ref={this.props.refAbout}  className={styles.about}>
                <Banner refOffer={this.props.refOffer} onScrollContact={this.props.onScrollContact}/>
                <AboutMS />
            </div>
        )
    }
}

export default About;