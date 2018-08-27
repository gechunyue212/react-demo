import React, { Component } from 'react';
import styles from './index.scss';

export default class MobileDocuments extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.documents} id="MobileDocuments">
                <div className={styles.title}>{contentText.title}</div>
                <div className={styles.content}>{contentText.content}</div>
                <ul>
                    {
                        contentText.nav.map((item,i)=>(
                            <li key={i}>
                                <div className={styles.bg}></div>
                                    <p className={styles.scontent}>{item.scontent}</p>
                                    <p className={styles.kb}>{item.size}</p>
                                    <div className={styles.download}>
                                        <span className={styles.d}></span>
                                        <span className={styles.font}>Download</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
