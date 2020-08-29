import React, { Component } from 'react';
import styles from './Banner.module.css';
import classnames from 'classnames';
import BackgroundImage1 from './images/test.jpg';
import BackgroundImage2 from './images/4.jpg';
import BackgroundImage3 from './images/3.jpg';
import BackgroundImage4 from './images/5.jpg';

const slideContent=[{src:`${BackgroundImage1}`, text: 'Функциональные тренировки — это вид тренировок, которые развивают силу, выносливость, координацию, а также вовлекают в работу большой мышечный массив, что суммарно повышает общую эффективность занятия.', header:'Функциональный тренинг', click:'Приступить!', recommend:true}, {src:`${BackgroundImage2}`, text: 'Тренировка с индивидуально подобранными  базовыми и изолирующими упражнениями направленные на максимальный прирост мышечных объёмов, а также специально подобранная диета позволяющая набирать «качественную» массу!', header:'Набор мышечной массы', click:'Приступить!'}, {src:`${BackgroundImage4}`, text:'Интенсивные тренировки , в структуру которых входят сложные , многосуставные упражнения, которые позволяют быстро избавиться от лишнего веса! А также  Вы получаете дневник для записи каждой съеденной калории. Перед каждой тренировкой я просматриваю дневник и корректирую Ваше питание!', header:'Избавься от лишнего весa!', click:'Приступить!'}, {src:`${BackgroundImage3}`, text: 'Мои клиенты имеют звания мастеров спорта , кандидатов в мастера, а также многие из них имеют спортивные разряды! Речь идёт о пауэрлифтинге, тяжелой атлетике и гиревом спорте .', header:'Подготовка к соревнованиям', click:'Приступить!'}];



export default class Banner extends Component {
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
            <div ref={this.props.refOffer} className={styles.container}>
                <span className={styles.mainHeader}>Выбери для себя направление</span>
                <button onClick={this.handleClickLeft} className={classnames(styles.btn) }>
                    <i className='fa fa-angle-left'/>
                </button>
                <button onClick={this.handleClickRight} className={classnames(styles.rightBtn, styles.btn) }>
                    <i className='fa fa-angle-right'/>
                </button>
                <h3 className={styles.header}>{slideContent[this.state.currentSlide].header}</h3>
                <div className={styles.content} style={{backgroundImage: `url(${slideContent[this.state.currentSlide].src})`}}>
                </div>
                <p className={styles.bannerText}>{slideContent[this.state.currentSlide].text}</p>
                <button onClick={onScrollContact} className={styles.bannerBtn}>
                    {slideContent[this.state.currentSlide].click}
                </button>
            </div>
        )
    }
}
