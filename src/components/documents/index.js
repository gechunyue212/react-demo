import React, { Component } from 'react';
import styles from './index.scss';

export default class Documents extends Component{
    render(){
        return (
            <div className={styles.documents}>
                <div className={styles.title}>白皮书下载</div>
                <div className={styles.content}></div>
            </div>
        );
    }
}
