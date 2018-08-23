import React, { Component } from 'react';
import styles from './foot.scss';
import logo from '../../assets/img/logo2.png'
import twitter from '../../assets/img/Group 32.png';
import fb from '../../assets/img/Group 25.png';
import talegram from '../../assets/img/Group 30.png';
import weibo from '../../assets/img/Group 35.png';
import weixin from '../../assets/img/Group 26.png';
import qq from '../../assets/img/Group 31.png';
import qrcode1 from '../../assets/img/qrcode.png';
import qrcode2 from '../../assets/img/qrcode2.png';

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
        href:"javascript:void(0)",
        className:styles.hoverWeiXin,
        qrcodeDom:(<div className={styles.qrcodeBox}><img src={qrcode1} /></div>)
    },
    {
        img:qq,
        href:"javascript:void(0)",
        className:styles.hoverQQ,
        qrcodeDom:(<div className={styles.qrcodeBox}><img src={qrcode2} /></div>)
    },
];

export default class Footer extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.footerBox}>
                <div className={styles.box}>
                    <div className={`${styles.footerBtnBox} ${styles.clearAfter}`}>
                        <div className={`${styles.footerBtnLeft} ${styles.clearAfter}`}>
                            {
                                contentText.nav.map((item, i)=>(
                                    <a href={item.href} key={i} className={styles.footerBtnItem}>{item.text}</a>
                                ))
                            }
                        </div>
                        <div className={`${styles.footerBtnRight} ${styles.clearAfter}`}>
                            {
                                btnArr.map((item, i)=>(
                                    <a href={item.href} key={i} className={`${styles.rightBtnItem} ${item.qrcodeDom ? item.className : ''}`}>
                                        <img src={item.img} />
                                        { item.qrcodeDom ? item.qrcodeDom : null }
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.hrBox}/>
                    <div className={styles.copyText}>©2018 B7.com.All Right Reserved</div>
                </div>
            </div>
        );
    }
}
