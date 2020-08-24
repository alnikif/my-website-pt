import React, { Component } from 'react';
import styles from './AboutMS.module.css';
import classNames from  'classnames';

export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            isSliderOpen:false,
            btn:'Подробнее'
        }
    }
    
  handleShowClick=e=>{
        this.setState({
           isSliderOpen:!this.state.isSliderOpen
        })
        this.state.btn=='Подробнее'?this.setState({btn:'Свернуть'}):this.setState({btn:'Подробнее'})
    }
    render() {
        
        return (
            <div className={styles.banner}>
                <div className={classNames(styles.wraper, {[styles.sliderOpen]:this.state.isSliderOpen}) }>
                        <div className={classNames(styles.textWraper) }>
                            <h4>Обо мне</h4>
                            <div className={styles.text}>
                                <p>
                                    Разработал собственный метод  тренировок, в структуру которого входят сложные функциональные  многосуставные упражнения! Этот метод позволяет добиться заметных результатов быстрее традиционных методов тренировок!
                                </p>
                            </div>
                            <p className={styles.whiteText}>
                                Являюсь двухкратным чемпионом Европы, а также многократным чемпионом Украины и Роcсии (пауэрлифтинг). Мастер спорта международного класса.
                                Получил высшее образование в Национальной Академии Спорта.
                            </p>
                            <p className={styles.text}>
                                Являюсь автором нескольких силовых программ, которые позволяют максимально эффективно работать над увеличением силовых показателей и в свою очередь эти программы являются абсолютно безопасными и не наносят вред опорно-двигательному аппарату!
                            </p>
                        </div>   
                    <p className={styles.moreInfo} onClick={this.handleShowClick}>{this.state.btn}</p>
                </div>    
            </div>
           
        )
    }
}
