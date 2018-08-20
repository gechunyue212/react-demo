import React, { Component } from 'react';
import styles from './index.scss';

export default class MobileBanner extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.bannerBox}>
                <div className={styles.bannerTitle}>
                    {contentText.title}
                    <div className={styles.bannerTitleBg} />
                </div>
                <div className={styles.bannerContent}>{contentText.bannerText[0]}<br/>{contentText.bannerText[1]}</div>
                <div className={styles.bannerBottomList}>
                    {
                        contentText.bannerBottomText.map((item, i)=>(
                            <div key={i} className={styles.bannerBottomItem}>
                                <span className={styles.bannerBottomItemTitle}>{item.title}</span>
                                <span className={styles.bannerBottomItemNum}>{item.number}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
