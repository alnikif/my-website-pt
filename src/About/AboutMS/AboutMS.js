import React, { Component } from 'react';
import styles from './AboutMS.module.css';

export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            show:'none',
            top:'30%'
        }
    }
    handleShowClick=e=>{
        this.setState({
            show:'block',
            top:'0',
            hideBtn:'none'
        })
    }
    render() {
        
        return (
            <div className={styles.banner} style={{paddingTop:this.state.top}}>
                <div className={styles.wraper}>
                <h4>Обо мне</h4>
                    <p className={styles.whiteText}>
                        Являюсь двухкратным чемпионом Европы, а также многократным чемпионом Украины и Роcсии (пауэрлифтинг). Мастер спорта международного класса.
                        Получил высшее образование в Национальной Академии Спорта.
                    </p>
                    <p className={styles.orangeText} style={{display:this.state.show}}>
                        Разработал собственный метод  тренировок, в структуру которого входят сложные функциональные  многосуставные упражнения! Этот метод позволяет добиться заметных результатов быстрее традиционных методов тренировок!
                    </p>
                    <p className={styles.whiteTextHide} style={{display:this.state.show}}>
                        Являюсь автором нескольких силовых программ, которые позволяют максимально эффективно работать над увеличением силовых показателей и в свою очередь эти программы являются абсолютно безопасными и не наносят вред опорно-двигательному аппарату!
                    </p>   
                    <button className={styles.btn} onClick={this.handleShowClick} style={{display:this.state.hideBtn}}>Подробнее</button>
                </div>    
            </div>
           
        )
    }
}
