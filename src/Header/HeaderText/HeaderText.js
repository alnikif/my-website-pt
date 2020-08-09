import React, { Component } from 'react';
import styles from './HeaderText.module.css';
import classnames from 'classnames';

class HeaderText extends Component {
    render() {
        return (
            <div className={styles.headerWraper}>
                <h1 className={styles.headerText}>
                Сделай <span className={styles.orangeText}>свою</span> тренировку <span className={styles.orangeText}>максимально</span> эффективной
                </h1>
                <div className={classnames(styles.btnOr, styles.btn) }>Приступить!</div>
                <div className={classnames(styles.btnWh, styles.btn)}>Подробнее</div>
            </div>
        )
    }
}
export default HeaderText;




