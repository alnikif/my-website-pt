import React, { Component } from 'react';
import styles from './HeaderText.module.css';
import classnames from 'classnames';

class HeaderText extends Component {

    render() {
        const {onScrollContact, onScrollAbout}=this.props
        return (
            <div className={styles.container}>
                <div className={styles.blackWraper}>
                    <h1 className={styles.headerText}>
                        Сделай <span className={styles.orangeText}>свою</span> тренировку <span className={styles.orangeText}>максимально</span> эффективной
                    </h1>
                    <div onClick={onScrollContact} className={classnames(styles.btnOr, styles.btn) }>Приступить!</div>
                    <div onClick={onScrollAbout} className={classnames(styles.btnWh, styles.btn)}>Подробнее</div>
                </div>
  
            </div>
        )
    }
}
export default HeaderText;




