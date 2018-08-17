import React, { Component } from 'react';
import styles from './index.scss';

export default class DownLoadApp extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.box}>
                <div className={styles.content}>
                    <div className={styles.download}>
                        <div className={styles.downloadTitle}>{contentText.title}</div>
                        <div className={styles.downloadDescription1}>{contentText.description1[0]}<br/>{contentText.description1[1]}</div>
                        <div style={{height:"30px"}} />
                        <div className={styles.downloadBtns}>
                            <div className={styles.downloadBtn1}/>
                            <div className={styles.downloadBtn2}/>
                        </div>
                        <div style={{height:"10px"}} />
                        <div className={styles.downloadBtns}>
                            <div className={styles.downloadBtn3}/>
                            <div className={styles.downloadBtn4}/>
                        </div>
                        <div className={styles.downloadDescription2}>{contentText.description2[0]}<br/>{contentText.description2[1]}</div>
                    </div>
                    <div className={styles.imgBox}>
                        <div className={styles.imgIcon} />
                    </div>
                </div>
            </div>
        );
    }
}
