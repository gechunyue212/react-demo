import React, { Component } from 'react';
import './App.scss';

// PC端组件
import Head from './components/head/head';
import ProductList from './components/productList/productList';
import SkillList from './components/skillList/skillList';
import BrBox from './components/brBox/brBox';
import Footer from './components/Footer/foot';
// import Banner from './components/banner';
import KChart from './components/KChart';
import ChartArea from './components/chartArea';
import SkillArea from './components/skillArea';
import DownLoadApp from './components/downloadApp';
import Documents from './components/documents';
import Paper from './components/paper';
import RoadMap from './components/roadMap';
import * as Texts from './assets/text/text';
// PC端组件

// 移动端组件
import MobileHead from './mobileComponents/head';
import MobileBanner from './mobileComponents/banner';
import MobileKChart from './mobileComponents/kChart';
import MobileProducts from './mobileComponents/products';
import MobileTechnologys from './mobileComponents/technologys';
import MobileDocuments from './mobileComponents/documents';
import MobileRoadMap from './mobileComponents/roadMap';
import MobileDownload from './mobileComponents/download';
import MobileFooter from './mobileComponents/footer';
import * as MobileTexts from './assets/text/mobileText';
// 移动端组件

// 移动端设置rem
import setRem from './utils/rem';

function browserRedirect(PCComponent, MobileComponent) {
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    const bIsMidp = sUserAgent.match(/midp/i) == "midp";
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    const bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    const bIsAndroid = sUserAgent.match(/android/i) == "android";
    const bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    const bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        // PC端
        return PCComponent;
    } else {
        // 移动端
        // 移动端设置rem
        setRem(750, 750);
        return MobileComponent;
    }
}

// PC端
class PCApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            language:"EN",
            languageListData:{
                "EN":{
                    text:"EN",
                    documentTitle:"B7 Official network",
                },
                "CN":{
                    text:"CN",
                    documentTitle:"币期官网",
                },
                "JAP":{
                    text:"JAP",
                    documentTitle:"コイ期公式サイト",
                },
                "KOR":{
                    text:"KOR",
                    documentTitle:"화페 기한 홈사이트",
                }
            }
        };
    }
    onChangeLanguage = (language) => {
        const { languageListData } = this.state;
        document.title = languageListData[language].documentTitle;
        this.setState({ language });
    }

  render() {
        const { language, languageListData } = this.state;
        const languageList = Object.keys(languageListData);
        const { head, kChart, product, technology, documents, roadMap, download, foot } = Texts;
    return (
      <div style={{minWidth:"1250px"}}>
        <Head languageList={languageList} languageListData={languageListData} language={language} contentText={head[language]} handleMenuClick={this.onChangeLanguage} />
        <ChartArea>
            <KChart contentText={kChart[language]}/>
        </ChartArea>
          <div id="CoreAdvantages" style={{height:"100px"}} />
          <BrBox title={product[language].title} />
          <div style={{height:"85px"}} />
          <ProductList contentText={product[language]} />
          <SkillArea>
              <div style={{height:"46px"}} />
              <BrBox title={technology[language].title} />
              <div style={{height:"64px"}} />
              <SkillList language={language} contentText={technology[language]} />
          </SkillArea>
          <Documents contentText={documents[language]}/>
          <Paper contentText={head[language]}/>
          <RoadMap contentText={roadMap[language]}/>
          <DownLoadApp contentText={download[language]}/>
        <Footer contentText={foot[language]}/>
      </div>
    );
  }
}

// 移动端
class MobileApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            language:"EN",
            languageListData:{
                "EN":{
                    text:"EN",
                    documentTitle:"B7 Official network",
                },
                "CN":{
                    text:"CN",
                    documentTitle:"币期官网",
                }
            }
        };
    }

    onChangeLanguage = (language) => {
        const { languageListData } = this.state;
        document.title = languageListData[language].documentTitle;
        this.setState({ language });
    };

    render(){

        const { language, languageListData } = this.state;
        const languageList = Object.keys(languageListData); // [ "EN", "CN" ]
        const { head,kChart,product,documents,download} = MobileTexts;

        return (
            <div>
                <MobileHead onChangeLanguage={this.onChangeLanguage} languageList={languageList} language={language} />
                <MobileBanner contentText={head[language]} />
                <MobileKChart contentText={kChart[language]}></MobileKChart>
                <MobileProducts contentText={product[language]}/>
                <MobileTechnologys/>
                <MobileDocuments contentText={documents[language]}/>
                <MobileRoadMap/>
                <MobileDownload contentText={download[language]}/>
                <MobileFooter/>
            </div>
        );
    }
}


export default browserRedirect(PCApp, MobileApp);
