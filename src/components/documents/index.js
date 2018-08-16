import React, { Component } from 'react';
import styles from './index.scss';

export default class Documents extends Component{
    render(){
        return (
            <div className={styles.documents}>
                <div className={styles.title}>Documents</div>
                <div className={styles.content}>
                    The original documents have been published in English. Documents in other languages have been translated by our supporters from crypto community around the globe. In case of conflict between a translated and the English version, the English version should be your reference to validate the facts and figures.
                </div>
            </div>
        );
    }
}
