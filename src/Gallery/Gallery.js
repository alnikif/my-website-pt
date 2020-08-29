import React, { Component } from 'react';
import styles from './Gallery.module.css';
import classnames from 'classnames';

import BackgroundImage1 from './images/i1.jpg';
import BackgroundImage2 from './images/i2.jpg';
import BackgroundImage3 from './images/i3.jpg';
import BackgroundImage4 from './images/i4.jpg';
import BackgroundImage5 from './images/i5.jpg';
import BackgroundImage6 from './images/i6.jpg';
import BackgroundImage7 from './images/i7.jpg';
import BackgroundImage8 from './images/i8.jpg';
import BackgroundImage9 from './images/i9.jpg';


const slideContent=[{src:`${BackgroundImage2}`, text: 'Богдан . Чемпион мира в дисциплине жим лёжа, многократный чемпион Украины! Тренируется со мной с 2013 года.', click:'Хочу также!'},{src:`${BackgroundImage1}`, text: 'vgvhghgfhgfh', click:'Хочу также!'},  {src:`${BackgroundImage4}`, text:'Дмитрий. Занимается под моим руководством 5 лет.', click:'Хочу также!'}, {src:`${BackgroundImage3}`, text: 'shfb111111ssjhdfbj', click:'Хочу также!'}, {src:`${BackgroundImage5}`, text: 'shfb111111ssjhdfbj', click:'Хочу также!'}, {src:`${BackgroundImage6}`, text: 'shfb111111ssjhdfbj', click:'Хочу также!'}, {src:`${BackgroundImage7}`, text: 'shfb111111ssjhdfbj', click:'Хочу также!'}, {src:`${BackgroundImage8}`, text: 'Михаил . Полностью восстановился после травмы спины , похудел на 18 кг за полтора года.', click:'Хочу также!'},{src:`${BackgroundImage9}`, text: 'Кристиан. Стаж тренировок два года. Занимается функциональным тренингом.', click:'Хочу также!'} ];

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            currentSlide:0
        }
    }
    handleClickRight=()=>{
        const {currentSlide}=this.state;
        this.setState({
            currentSlide: currentSlide === slideContent.length-1 ? 0 : currentSlide+1
        })

    }
    handleClickLeft=()=>{
        const {currentSlide}=this.state;
        this.setState({
            currentSlide:currentSlide === 0 ? slideContent.length-1 : currentSlide-1
        })

    }
    render() {
      const {onScrollContact}=this.props
        return (
            <div ref={this.props.refGallery} className={styles.mainContainer}>
                <h3 className={styles.headerText}>Реальные люди - <span className={styles.orangeText}>реальные результаты !</span> </h3>
                <div className={styles.container}>
                    <button onClick={this.handleClickLeft} className={classnames(styles.btn) }>
                        <i className='fa fa-angle-left'/>
                    </button>
                    <button onClick={this.handleClickRight} className={classnames(styles.rightBtn, styles.btn) }>
                        <i className='fa fa-angle-right'/>
                    </button>
                    <div className={styles.content} style={{backgroundImage: `url(${slideContent[this.state.currentSlide].src})`}}>
                </div>
               
                </div>
                <p className={styles.bannerText}>{slideContent[this.state.currentSlide].text}</p>
                <button onClick={onScrollContact} className={styles.bannerBtn}>
                    {slideContent[this.state.currentSlide].click}
                </button>
            </div>
        )
    }
}
