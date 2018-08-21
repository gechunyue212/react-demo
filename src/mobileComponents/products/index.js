import React, { Component } from 'react';
import styles from './index.scss';

export default class MobileProducts extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.MobileProduct} id="MobileProducts">
                <div className={styles.head}>{contentText.title}</div>
                {
                    contentText.products.map((item,i)=>(
                        <Box src={item.iconImg} title={item.title} content={item.description} key={i}></Box>
                    ))
                }
            </div>
        );
    }
}

class Box extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { src, title, content } = this.props;
        return (
            <div className={styles.cellBox}>
                <div className={styles.imgIcon}>
                    <img className={styles.imgIcon} src={src} />
                </div>
                <div className={styles.contentBox}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.content}>{content}</p>
                </div>   
            </div>
        );
    }
}