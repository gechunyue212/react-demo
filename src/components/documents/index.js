import React, { Component } from 'react';
import styles from './index.scss';

export default class Documents extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.documents}>
                <div className={styles.title}>{contentText.title}</div>
                <div className={styles.content}>{contentText.content}</div>
            </div>
        );
    }
}
