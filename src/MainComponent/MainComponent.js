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
   

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <Logo />
                    <Navbar onScroll={this.scrollToContact, this.scrollToGenerator}/>
                </div>
                <Header />
                <About />
                <Gallery />
                <Generator refGenerator={this.refGenerator} />
                {/* <Advantage /> */}
                <Footer refContact={this.refContact}/>
            
              
            </div>
            
        )
    }
}

export default MainComponent;