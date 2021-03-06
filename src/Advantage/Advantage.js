import React, { Component } from 'react';
import styles from './Advantage.module.css';
import classNames from 'classnames'

export default class Advantage extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>Тренируясь со мной , Вы гарантировано :</p>
                    <div className={styles.leftSide}>
                        <div className={classNames(styles.fastStart, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconFastStart)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Быстро адаптируетесь к тренировкам!</p>
                                </div>
                        </div>
                        <div className={classNames(styles.muscles, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconMuscles)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Нарастите мышечную массу!</p>
                            </div>
                        </div>
                        <div className={classNames(styles.weightLoss, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconWeightLoss)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Избавитесь от лишнего веса!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                       <div className={classNames(styles.strong, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconStrong)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Улучшите силовые показатели!</p>
                            </div>
                            
                            
                       </div>
                        <div className={classNames(styles.nutrition, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconNutrition)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Освоите правильноe питание!</p>
                            </div>
                        </div>
                        <div className={classNames(styles.fastSkill, styles.block)}>
                            <div className={styles.iconWraper}>
                                <div className={classNames(styles.icon, styles.iconSkill)}>
                                    <div className={styles.blackNet}></div>
                                </div>
                                <p className={styles.text}>Улучшите спортивные навыки!</p>
                            </div>
                        </div>
                    </div>
                


                </div>
            </div>
        )
    }
}
