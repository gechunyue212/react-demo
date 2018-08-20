import React, { Component } from 'react';
import styles from './index.scss';
import img1 from '../../assets/mobileImg/Group 6.png';
import img2 from '../../assets/mobileImg/Group 11.png';
import img3 from '../../assets/mobileImg/Group 16.png';
import img4 from '../../assets/mobileImg/Group 20.png';
export default class MobileDownload extends Component{
    render(){
        const { contentText } = this.props
        return (
            <div className={styles.download}>
                <div className={styles.title}>{contentText.title}</div>
                <div className={styles.bg}></div>
                <div className={styles.content}>{contentText.content}</div>
                <ul>
                    <li>
                        <img src={img1}/>
                    </li>
                    <li>
                        <img src={img2}/>   
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={img3}/>   
                    </li>
                    <li>
                        <img src={img4}/>   
                    </li>
                </ul>
            </div>
        );
    }
}
