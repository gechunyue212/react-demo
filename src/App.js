import React, { Component } from 'react';
import './App.scss';
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

class App extends Component {

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
    onChangeLanguage(language){
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
        <Head languageList={languageList} languageListData={languageListData} language={language} contentText={head[language]} handleMenuClick={(language)=>this.onChangeLanguage(language)} />
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

export default App;
