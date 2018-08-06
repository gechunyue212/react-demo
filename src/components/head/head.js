import React, { Component } from 'react';
import styles from './head.scss';

export class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className={styles.head}></div>
        );

    }
}
