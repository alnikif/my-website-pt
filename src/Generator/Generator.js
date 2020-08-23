import React, { Component } from 'react';
import styles from './Generator.module.css';
import classNames from 'classnames';


export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            isSliderOpen:false,
            sportValue:'athleticism',
            plValue:'squat',
            atValue:'top'
        }
    }
  
    handleSlideClick=e=>{
        e.preventDefault();
        this.setState({
            isSliderOpen:!this.state.isSliderOpen
        })
    }
    handleChangeType=e=>{
        this.setState({
            sportValue:e.target.value
        })
    }
    handleChangePl=e=>{
        this.setState({
            plValue:e.target.value
        })
    }
    handleChangeAt=e=>{
        this.setState({
            atValue:e.target.value
        })
    }
    render() {
        return (
            <div ref={this.props.refGenerator} className={styles.container}>
                <div className={classNames(styles.darkWraper, {[styles.sliderOpen]:this.state.isSliderOpen})}>

                    <div className={classNames(styles.leftBlock, styles.block)}>
                        <p className={styles.blockText}></p>
                    </div>
                    <div className={classNames(styles.rightBlock, styles.block)}></div>
                  
                    <div className={styles.formContainer}>
                        <button className={styles.showBtn} onClick={this.handleSlideClick}>
                            Generator
                        </button>
                        <div className={styles.content}>
                            <form action="">
                                <label>
                                    Выберите направление:<br/>
                                    <select value={this.state.sportValue} onChange={this.handleChangeType}>
                                        <option value="athleticism">Атлетизм</option>
                                        <option value="powerlifting">Пауэрлифтинг</option>
                                    </select>    
                                </label><br/>
                                <label>
                                    {this.state.sportValue==='powerlifting' ?  <select value={this.state.   plValue} onChange={this.handleChangePl}>
                                        <option value="squat">Приседания со штангой</option>
                                        <option value="deadlift">Становая тяга</option>
                                        <option value="bench-press">Жим лёжа</option>

                                    </select> : <select value={this.state.atValue} onChange={this.handleChangeAt}>
                                        <option value="top">Верх тела</option>
                                        <option value="bottom">Ноги</option>
                                    </select>}
                                     
                                </label>
                                    
                                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/>
                                    <input className={styles.inpt} type="number" placeholder='Приседания со штангой'/>
                                    <input className={styles.inpt} type="number" placeholder='Укажите Ваш вес'/>
                                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/>
                                    <input className={styles.inpt} type="number" placeholder='Жим лёжа'/>

                            </form>
                            <button className={styles.btn} onClick={this.handleClick}>Готово!</button>
                        </div>
                            {/* <div className={styles.treningList} style={{display:this.state.trList}}>
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
                            </div> */}
                    </div>
                </div>    
            </div>

        )
    }
}
