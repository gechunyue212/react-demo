import React, { Component } from 'react';
import styles from './index.scss';
import technologyIconImg1 from "../../assets/img/Bitmap1.png";
import technologyIconImg2 from "../../assets/img/Bitmap2.png";
import technologyIconImg3 from "../../assets/img/Bitmap3.png";
import technologyIconImg4 from "../../assets/img/Bitmap4.png";

const data = {
    title:"Technology Advantages",
    technology:[
        {
            iconImg:technologyIconImg1,
            title:"Security system at financial level",
            description:[
                "Multi-layer and multi-cluster system architecture",
                "Multiple foreign acceleration nodes ensure smooth network",
                "Professional distributed architecture and anti - DDOS attack system"
            ]
        },
        {
            iconImg:technologyIconImg2,
            title:"High performance, high liquidity",
            description:[
                "Up to 1.4 million deals every second high performance matching engine technology",
                "Cost-effective， transparent",
                "Provide BTC “dark pools” service"
            ]
        },
        {
            iconImg:technologyIconImg3,
            title:"All-platform, multi-language",
            description:[
                "Accessible by iOS, Android, Windows and Mac platforms. All functions are supported.",
                "Support mainstream languages such as : English, Chinese Simplified, Chinese Traditional, Korean, Japanese, etc."
            ]
        },
        {
            iconImg:technologyIconImg4,
            title:"Decentrialized",
            description:[
                "Complete all transaction links on the chain to avoid asset custody",
                "DAO organizes operations, open, transparent and democratic"
            ]
        },
    ]
};

export default class MobileTechnologys extends Component{
    render(){
        return (
            <div className={styles.boxBg} id="MobileTechnologys">
                <div className={styles.technologyBox}>
                    <div className={styles.technologyTitle}>Technology Introduction</div>
                    {
                        data.technology.map((item, i)=>(
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
