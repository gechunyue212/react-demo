import React, { Component } from 'react';
import styles from './index.scss';
import img1 from '../../assets/mobileImg/Group 6@3x.png';
import img2 from '../../assets/mobileImg/Group 11@3x.png';
import img3 from '../../assets/mobileImg/Group 16@3x.png';
import img4 from '../../assets/mobileImg/Group 20@3x.png';
export default class MobileDownload extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.download} id="MobileDownload">
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
