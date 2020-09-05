import React from 'react';
import styles from './Generator.module.css';
import { Field } from "formik";

export default function FieldText(props) {
    const{error, name, placeholder, touched, type}=props;
    return (
        <div>
            <Field name={name} type={type} className={styles.input} placeholder={placeholder} />
            {error && touched && <span className={styles.error}>{error}</span>}  
        </div>
       
    )
}
