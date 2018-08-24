import React, { Component } from 'react';
import styles from './index.scss';
import HeadLogo from '../../assets/mobileImg/head_logo.png';
import NavBtn from '../../assets/mobileImg/head_nav.png';
import MavBtnBgImg from '../../assets/mobileImg/right_nav_bg.png';
var rootdiv = document.getElementsByTagName("body")[0];
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
        if( navStatus == false){
            rootdiv.style.cssText = "height:100%;overflow:hidden;position:fixed"
        }else{
            rootdiv.style.cssText="height:100%;overflow:auto"
        }
        
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
        if( navStatus == false){
            rootdiv.style.cssText = "height:100%;overflow:hidden;position:fixed"
        }else{
            rootdiv.style.cssText="height:100%;overflow:auto"
        }
    }
    render(){

        const { navStatus } = this.state;
        const { menuList, value, languageListData } = this.state;
        const { contentText } = this.props
        return (
            <div className={styles.headBox}>
                <div className={styles.headLogo}><img src={HeadLogo} /></div>
                <div onClick={this.toggleOpenNav} className={styles.headBtn}>
                    <img src={NavBtn} />
                </div>
                <div className={styles.rightNavBox + " " + (navStatus ? styles.showNav : styles.hideNav)} >
                    <div className={styles.rightNavBgColor + " " + (navStatus ? styles.rightNavBgColorShow : styles.rightNavBgColorHide)}/>
                    <div className={styles.rightNav + " " + (navStatus ? styles.rightNavShow : styles.rightNavHide)}>
                        <div className={styles.rightNavBg}>
                            <img src={MavBtnBgImg} />
                        </div>
                        {
                            contentText.nav.map((item,i)=>(
                                <a href={item.href} onClick={this.toggleOpenNav} className={styles.rightNavBtn} key={i}>{item.title}</a>
                            ))
                        }
                        <div className={styles.rightNavBtn}>{contentText.switch}</div>
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
