import React, { Component } from 'react';
import styles from './Generator.module.css';
import classNames from 'classnames';
import { Formik, Field, Form } from "formik";

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
                                    sportType:'pl'
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
                                      
                                      console.log(values.powerlifting)
                                        
                                        
                                    )}
                                    return (
                                        <Form >
                                            <Field name='test' type='text'/>
                                  
                                                <Field as="select" name="sportType">
                                                    <option value="pl">Powerlifting</option>
                                                    <option value="atl">Athleticism </option>
                                                </Field>
                                           
                                               
                                            <button onClick={handleChange} type='submit' className={styles.btn}>Click</button>
                                    </Form>  

                                    )
                                }}
                                />
                            
                        
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
