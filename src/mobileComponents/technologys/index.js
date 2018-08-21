import React, { Component } from 'react';
import styles from './index.scss';

export default class MobileTechnologys extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.boxBg} id="MobileTechnologys">
                <div className={styles.technologyBox}>
                    <div className={styles.technologyTitle}>{contentText.title}</div>
                    {
                        contentText.technology.map((item, i)=>(
                            <div key={i} className={styles.technologyItem}>
                                <div className={styles.technologyItemIcon}><img src={item.iconImg} /></div>
                                <div className={styles.technologyItemContent}>
                                    <div className={styles.technologyItemTitle}>{item.title}</div>
                                    <div className={styles.technologyItemTitleBrBox}/>
                                    <div className={styles.technologyItemTextBox}>
                                        {
                                            item.description.map((preItem, j)=>(
                                                <div key={j} className={styles.itemTextContent}>
                                                    <div className={styles.itemTextContentIcon}/>
                                                    {preItem}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
