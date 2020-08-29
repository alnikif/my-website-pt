import React, { Component } from 'react';
import styles from './Generator.module.css';
import classNames from 'classnames';
import { Formik, Field, Form } from "formik";

export default class Generator extends Component {
    constructor(props){
        super(props);
        this.state={
            isSliderOpen:false
        }
    }
    handleSlideClick=e=>{
        e.preventDefault();
        this.setState({
            isSliderOpen:!this.state.isSliderOpen
        })
    }
    render() {
        return (
            <div ref={this.props.refGenerator} className={styles.container}>
                <div className={classNames(styles.darkWraper,{[styles.sliderOpen]:this.state.isSliderOpen})}>
                    <div className={classNames(styles.leftBlock, styles.block)}>
                        <p className={styles.blockText}></p>
                    </div>
                    <div className={classNames(styles.rightBlock, styles.block)}></div>
                    <div className={styles.formContainer}>
                        <button className={styles.showBtn} onClick={this.handleSlideClick}>
                            Generator
                        </button>
                        <div className={styles.content}>
                            <Formik 
                                initialValues={{
                                    test:'',
                                    sportType:'atl'
                                }}
                                onSubmit={()=>{
                                   
                                }}
                                render={({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                })=>{
                                    handleChange=e=>{(
                                      console.log(values.sportType)
                                    )}
                                    return (
                                        <Form >
                                                <Field as="select" name="sportType">
                                                    <option value="pl">Пауэрлифтинг</option>
                                                    <option value="atl">Атлетическая гимнастика</option>
                                                </Field><br/>
                                                {values.sportType==='atl'? 
                                                  <Field as="select" name="test">
                                                  <option value="atlTop">Верхняя часть тела</option>
                                                  <option value="atlBottom">Ноги</option>
                                                </Field> :   
                                                <Field as="select" name="test2">
                                                    <option value="squat">Приседания со штангой</option>
                                                    <option value="bp">Жим штанги лёжа</option>
                                                    <option value="dl">Становая тяга</option>
                                                </Field>}<br/>
                                                {values.test==='atlBottom'&&
                                                <Field name='a' value='Приседания со штангой'/>}

                                            <button onClick={handleChange} type='submit' className={styles.btn}>Click</button>
                                    </Form>  

                                    )
                                }}
                                />
                        </div>
                         
                    </div>
                </div>    
            </div>

        )
    }
}
