import React, { Component } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Logo from '../Header/Logo/Logo';
import Header from '../Header/Header';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Generator from '../Generator/Generator';
import Advantage from '../Advantage/Advantage';
import Footer from '../Footer/Footer'
import styles from './MainComponent.module.css';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.refGenerator=React.createRef();
        this.refContact=React.createRef();
        this.refGallery=React.createRef();
        this.refAbout=React.createRef();
        this.refOffer=React.createRef();
       
    }
    scrollToContact=()=>{
        window.scrollTo({
            top:this.refContact.current.offsetTop,
            behavior:"smooth"
          
        });
    }
    scrollToGenerator=()=>{
        window.scrollTo({
            top:this.refGenerator.current.offsetTop,
            behavior:'smooth'
        })
    }
    scrollToGallery=()=>{
        window.scrollTo({
            top:this.refGallery.current.offsetTop,
            behavior:'smooth'
        })
    }
    scrollToAbout=()=>{
        window.scrollTo({
            top:this.refAbout.current.offsetTop,
            behavior:'smooth'
        })
    }
    scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    scrollToOffer=()=>{
        window.scrollTo({
            top:this.refOffer.current.offsetTop,
            behavior:'smooth'
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <Logo />
                    <Navbar onScrollTop={this.scrollToTop} onScrollAbout={this.scrollToAbout} onScrollGenerator={this.scrollToGenerator} onScrollContact={this.scrollToContact} onScrollGallery={this.scrollToGallery} onScrollOffer={this.scrollToOffer} />
                </div>
                <Header onScrollAbout={this.scrollToAbout} onScrollContact={this.scrollToContact} />
                <About refAbout={this.refAbout} refOffer={this.refOffer} onScrollContact={this.scrollToContact} />
                <Gallery refGallery={this.refGallery} onScrollContact={this.scrollToContact} />
                <Generator refGenerator={this.refGenerator} />
                {/* <Advantage /> */}
                <Footer refContact={this.refContact}/>
            </div>
            
        )
    }
}

export default MainComponent;