import React, { Component } from 'react';
import styles from './brBox.scss';
import LeftIcon from '../../assets/img/Group 5 Copy 3@2x.png';
import RightIcon from '../../assets/img/Group 5@2x.png';

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className={styles.brBox}>
                <div className={styles.icon}>
                    <img src={LeftIcon}/>
                </div>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.icon}>
                    <img src={RightIcon}/>
                </div>
            </div>
        );

    }
}
