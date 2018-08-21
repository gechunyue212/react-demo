import React, { Component } from 'react';
import styles from './index.scss';
import twitter from '../../assets/img/Group 32.png';
import fb from '../../assets/img/Group 25.png';
import talegram from '../../assets/img/Group 30.png';
import weibo from '../../assets/img/Group 35.png';
import weixin from '../../assets/img/Group 26.png';
import qq from '../../assets/img/Group 31.png';
const btnArr = [
    {
        img:twitter,
        href:"https://twitter.com/ex_b7"
    },
    {
        img:fb,
        href:"javascript:void(0)"
    },
    {
        img:talegram,
        href:"https://t.me/B7exchange"
    },
    {
        img:weibo,
        href:"https://weibo.com/6633469936"
    },
    {
        img:weixin,
        href:"javascript:void(0)"
    },
    {
        img:qq,
        href:"javascript:void(0)"
    },
];
export default class MobileFooter extends Component{
    render(){
        const { contentText } =this.props;
        return (
            <div className={styles.footer}>
            <div className={styles.wrap}>
            {contentText.nav.map((item,i)=>(
                <div className={styles.box} key={i}>
                    <div className={styles.title}>{item.title}</div>
                    {
                        item.items.map((pitem,j)=>(
                            <a href={"javascript:void(0)"} key={j} className={styles.navItem}>{pitem.title}</a>
                        ))
                    }
                </div>
            ))}
            </div>
                <div className={styles.footerLogoBtn}>
                            {
                                btnArr.map((item,i)=>(
                                    <a target="_blank" href={item.href} key={i} className={styles.btn}>
                                        <img src={item.img} />
                                    </a>
                                ))
                            }
                </div>
                <div className={styles.fcopy}>
                    ©2018 B7.com.All Right Reserved
                </div>
            </div>
        );
    }
}
