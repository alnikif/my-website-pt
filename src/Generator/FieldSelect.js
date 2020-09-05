import React from 'react';
import styles from './Generator.module.css';
import { options } from './options';
import { Field } from "formik";


export default function FieldSelect(props) {

    const{error, label, name, optionsList, touched}=props;
    return (
        <div>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <Field as='select' name={name} className={styles.select}>
                {optionsList.map((option, key)=><option value={option} key={key}>{options[option]}</option>)}
            </Field>
            {error && touched && <span className={styles.error}>{error}</span>}  
        </div>
    )
}
