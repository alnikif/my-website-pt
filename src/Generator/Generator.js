import React, { Component } from 'react';
import styles from './Generator.module.css';


export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            trList:'none'
        }
    }
    handleClick=e=>{
        e.preventDefault();
        this.setState({
            trList:'block'
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.formContainer}>
                <p>
                    Введите запрашиваемые данные и программа сгенерирует для Вас тренировку!
                </p>
                <form action="">
                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/>
                    <input className={styles.inpt} type="text" placeholder='Приседания со штангой'/>
                    <input className={styles.inpt} type="text" placeholder='Укажите Ваш вес'/>
                </form>
                <button className={styles.btn} onClick={this.handleClick}>Готово!</button>
                <div className={styles.treningList} style={{display:this.state.trList}}>
                <ul>
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                       <li>4</li>
                       <li>5</li>
                       <li>5</li>
                       <li>6</li>
                       <li>7</li>
                       <li>8</li>
                       <li>9</li>
                   </ul>
                </div>
                </div>
               <div className={styles.timeTest}>
                 
               </div>
            </div>

        )
    }
}
