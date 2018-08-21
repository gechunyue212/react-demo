import React, { Component } from 'react';
import styles from './head.scss';
import logo from '../../assets/img/logo.png';
import logoSvg from '../../assets/img/logo.svg';

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const { contentText, languageList, language, languageListData } = this.props;

        return (
            <div className={styles.header}>

                <div className={styles.headText}>
                    <div className={styles.headTitle}>
                        {contentText.title}
                        <div className={styles.headTitleBg} />
                    </div>
                    <p className={styles.headTextP}>{contentText.bannerText[0]}<br/>{contentText.bannerText[1]}</p>
                </div>

                <div className={styles.headBox}>
                    <div className={styles.headBoxContent}>
                        <div className={styles.headLeft}>
                            <div className={styles.logo}>
                                {/*<img src={logo} />*/}
                                <embed src={logoSvg} width="110" height="35"
                                       type="image/svg+xml"
                                       pluginspage="http://www.adobe.com/svg/viewer/install/" />
                            </div>
                        </div>
                        <div className={styles.headRight}>
                            {
                                contentText.nav.map((item,i)=>(
                                    <a href={item.href} key={i} className={styles.actionBtn}>{item.title}</a>
                                ))
                            }
                            {/*<a href='javascript:void(0)' className={styles.headBtn} style={{marginRight:'0'}}> cn &gt;</a>*/}
                            <Menu languageList={languageList} languageListData={languageListData} language={language} onClick={this.props.handleMenuClick} />
                        </div>
                    </div>
                </div>
                <div className={styles["banner-bottom"]}>
                    <div className={styles["banner-bottom-box"]}>
                        {/*{*/}
                            {/*contentText.bannerBottomText.map((item,i)=>(*/}
                                {/*<div key={i} className={styles["banner-bottom-item"]}>*/}
                                    {/*{item.title}<span className={styles["orange-text"]}>{item.number}</span>*/}
                                {/*</div>*/}
                            {/*))*/}
                        {/*}*/}
                        <div className={styles["banner-bottom-notice"]}>
                            {contentText.noticeText}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:props.language,
            menuList:props.languageList,
            languageListData:props.languageListData,
            showMenuList:false
        };
    }

    handleClick(value){
        this.setState({
            value,
            showMenuList:!this.state.showMenuList
        });
        if(typeof this.props.onClick === 'function'){
            this.props.onClick(value);
        }
    }

    render(){
        const { menuList, value, showMenuList, languageListData } = this.state;
        const language = languageListData[value].text;
        return (
            <div className={styles.menu}>
                <div className={styles.menuTitle} onClick={() => this.setState({showMenuList:!showMenuList})}>{language + " >"}</div>
                <div className={styles.menuListBox + " " + (showMenuList ? styles.show : styles.hide)}>
                    {
                        menuList.map((item,i)=>(
                            <div className={styles.menuItem} onClick={()=>this.handleClick(item)} key={i}>{languageListData[item].text}</div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
