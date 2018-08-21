import React, { Component } from 'react';
import styles from './index.scss';
import HeadLogo from '../../assets/mobileImg/head_logo.png';
import NavBtn from '../../assets/mobileImg/head_nav.png';
import MavBtnBgImg from '../../assets/mobileImg/right_nav_bg.png';

export default class MobileHead extends Component{

    constructor(props){
        super(props);
        this.state = {
            navStatus:false,
            value:props.language,
            menuList:props.languageList,
            languageListData:props.languageListData,
        };
    }

    toggleOpenNav = ()=>{
        const { navStatus } = this.state;
        this.setState({ navStatus:!navStatus });
        
    };

    handleClick = (value) => {
        const { navStatus } = this.state;
        this.setState({
            value,
            navStatus:!navStatus
        });
        // if(typeof this.props.onClick === 'function'){
            this.props.handleMenuClick(value);
        // }
    }
    render(){

        const { navStatus } = this.state;
        const { menuList, value, languageListData } = this.state;

        return (
            <div className={styles.headBox}>
                <div className={styles.headLogo}><img src={HeadLogo} /></div>
                <div onClick={this.toggleOpenNav} className={styles.headBtn}>
                    <img src={NavBtn} />
                </div>
                <div className={styles.rightNavBox + " " + (navStatus ? styles.showNav : styles.hideNav)}>
                    <div className={styles.rightNavBgColor + " " + (navStatus ? styles.rightNavBgColorShow : styles.rightNavBgColorHide)}/>
                    <div className={styles.rightNav + " " + (navStatus ? styles.rightNavShow : styles.rightNavHide)}>
                        <div className={styles.rightNavBg}>
                            <img src={MavBtnBgImg} />
                        </div>
                        <a href="#MobileProducts" onClick={this.toggleOpenNav} className={styles.rightNavBtn}>产品优势</a>
                        <a href="#MobileTechnologys" onClick={this.toggleOpenNav} className={styles.rightNavBtn}>技术优势</a>
                        <a href="#MobileDocuments" onClick={this.toggleOpenNav} className={styles.rightNavBtn}>白皮书</a>
                        <a href="#MobileRoadMap" onClick={this.toggleOpenNav} className={styles.rightNavBtn}>路线图</a>
                        <a href="#MobileDownload" onClick={this.toggleOpenNav} className={styles.rightNavBtn}>下载</a>
                        <div className={styles.rightNavBtn}>语言切换</div>
                        {
                            menuList.map((item,i)=>(
                                <a href="javascript:void(0)" key={i} onClick={()=>this.handleClick(item)} className={styles.rightNavBtn + " " + styles.leftPadding}>{languageListData[item].text}</a> 
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}
