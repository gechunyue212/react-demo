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
                    <div className={styles.footerLeft}>
                        <div className={styles.footerLogo}><img src={logo} /></div>
                        <div className={styles.footerLogoTitle}>{contentText.logoTitle}</div>
                        <div className={styles.footerLogoBtn}>
                            {
                                btnArr.map((item,i)=>(
                                    <a target="_blank" href={item.href} key={i} className={styles.btn + " " + (item.className ? item.className : "")}>
                                        <img src={item.img} />
                                        {
                                            item.qrcodeDom ?
                                                item.qrcodeDom
                                                :
                                                null
                                        }
                                    </a>
                                ))
                            }
                        </div>
                        <div className={styles.footerCopy}>©2018 B7.com.All Right Reserved</div>
                    </div>
                    <div className={styles.footerRight}>
                        {
                            contentText.nav.map((item,i)=>(
                                <div key={i} className={styles.navItems} >
                                    <div className={styles.navItemsTitle}>{item.title}</div>
                                    <div className={styles.navItemsContent}>
                                        {
                                            item.items.map((preItem,j)=>(
                                                <a href={"javascript:void(0)"} key={j} className={styles.navItem}>{preItem.title}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}
