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
            language:"cn"
        };
    }
    onChangeLanguage(language){
        this.setState({ language });
    }

  render() {
        const { language } = this.state;
        const { head, kChart, product, technology, download, foot } = Texts;
    return (
      <div style={{minWidth:"1250px"}}>
        <Head contentText={head[language]} handleMenuClick={(language)=>this.onChangeLanguage(language)} />
        <ChartArea>
            <KChart contentText={kChart[language]}/>
        </ChartArea>
          <div style={{height:"100px"}} />
        <BrBox title={product[language].title} />
          <div style={{height:"85px"}} />
        <ProductList contentText={product[language]} />
          <SkillArea>
              <div style={{height:"46px"}} />
              <BrBox title={technology[language].title} />
              <div style={{height:"64px"}} />
              <SkillList language={language} contentText={technology[language]} />
          </SkillArea>
          <Documents contentText={head[language]}/>
          <Paper contentText={head[language]}/>
          <RoadMap contentText={head[language]}/>
          <DownLoadApp contentText={download[language]}/>
        <Footer contentText={foot[language]}/>
      </div>
    );
  }
}

export default App;
