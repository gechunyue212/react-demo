import React, { Component } from 'react';
import styles from './index.scss';

export default class ChartArea extends Component{
    render(){
        return (
            <div className={styles.chartArea}>
                <div className={styles.bgIcon1} />
                <div className={styles.bgIcon2} />
                {this.props.children}
            </div>
        );
    }
}
