import React, { Component } from 'react';
import styles from './index.scss';
import HeadLogo from '../../assets/mobileImg/head_logo.png';

export default class MobileHead extends Component{
    render(){
        return (
            <div className={styles.headBox}>
                <div className={styles.headLogo}><img src={HeadLogo} /></div>
                <div className={styles.headBtn}/>
            </div>
        );
    }
}
