import React, { Component } from 'react';
import styles from './index.scss';

export default class MobileDocuments extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.documents}>
                <div className={styles.title}>{contentText.title}</div>
                <div className={styles.content}>{contentText.content}</div>
                <ul>
                    <li>
                        <div className={styles.bg}></div>
                            <p className={styles.scontent}>{contentText.scontent}</p>
                            <p className={styles.kb}>150kb</p>
                            <div className={styles.download}>
                                <span className={styles.d}></span>
                                <span className={styles.font}>Download</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.bg}></div>
                            <p className={styles.scontent}>{contentText.scontent}</p>
                            <p className={styles.kb}>150kb</p>
                            <div className={styles.download}>
                                <span className={styles.d}></span>
                                <span className={styles.font}>Download</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.bg}></div>
                            <p className={styles.scontent}>{contentText.scontent}</p>
                            <p className={styles.kb}>150kb</p>
                            <div className={styles.download}>
                                <span className={styles.d}></span>
                                <span className={styles.font}>Download</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
