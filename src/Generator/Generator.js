import React, { Component } from 'react';
import styles from './Generator.module.css';


export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            test:11
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.formContainer}>
                <p>
                    Введите запрашиваемые данные и программа сгенерирует для Вас тренировку!
                </p>
                <form action="">
                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/><br/>
                        <input className={styles.inpt} type="text" placeholder='Приседания со штангой'/>
                </form>
                <button className={styles.btn}>Готово!</button>
                </div>
               
            </div>
        )
    }
}
