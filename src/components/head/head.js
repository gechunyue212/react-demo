import React, { Component } from 'react';
import styles from './head.scss';
// import HeadIcon from '../../assets/img/'

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className={styles.headBox}>
                <div className={styles.headLeft}>
                    <div>
                        <img src={''} />
                    </div>
                </div> 
                <div className={styles.headRight}>
                    <a className={styles.actionBtn}>交易超市</a>
                    <a className={styles.actionBtn}>简介与帮助</a>
                    <span> </span>
                    <a className={styles.headBtn}>登录</a>
                    <span className={styles.headBtn}>|</span>
                    <a className={styles.headBtn}>注册</a>
                    <img/>
                    <a className={styles.headBtn} style={{marginRight:'0'}}>cn</a>
                    <a className={styles.headBtn}>&gt;</a>
                </div>
            </div>
        );

    }
}
