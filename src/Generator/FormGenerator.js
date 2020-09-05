import React from 'react';
import styles from './Generator.module.css';
import FieldSelect from './FieldSelect';
import FieldText from './FieldText';
import { Formik, Form } from "formik";

export default function FormGenerator() {
    return (
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
                <Form>
                    <FieldSelect label='enter...' error={errors.sportType} name='sportType' optionsList={['pl', 'atl']} touched={touched.sportType}/>
                    {values.sportType==='atl' ? 
                        <FieldSelect error={errors.atlOptions} name='atlOptions' optionsList={['atlTop', 'atlBottom']} touched={touched.atlOptions}/> : 
                        <FieldSelect error={errors.plOptions} name='plOptions' optionsList={['squat', 'bp', 'dl']} touched={touched.plOptions}/>}

                    
                   
                    {values.sportType==='atl' && values.atlOptions=='atlTop' && 
                        <FieldText error={errors.bpWeight} name='bpWeight' placeholder='enter bpWEight' touched={touched.bpWeight} type='number'/>
                    }

                <button onClick={handleChange} type='submit' className={styles.btn}>Click</button>
            </Form>  

            )
        }}
        />
    )
}
