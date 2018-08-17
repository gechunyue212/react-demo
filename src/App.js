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
            languageList:[ "EN", "CN", "JAP", "KOR" ]
        };
    }
    onChangeLanguage(language){
        this.setState({ language });
    }

  render() {
        const { language, languageList } = this.state;
        const { head, kChart, product, technology, documents, roadMap, download, foot } = Texts;
    return (
      <div style={{minWidth:"1250px"}}>
        <Head languageList={languageList} language={language} contentText={head[language]} handleMenuClick={(language)=>this.onChangeLanguage(language)} />
        <ChartArea>
            <KChart contentText={kChart[language]}/>
        </ChartArea>
          <SkillArea>
              <div id="CoreAdvantages" style={{height:"100px"}} />
              <BrBox title={product[language].title} />
              <div style={{height:"85px"}} />
              <ProductList contentText={product[language]} />
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
