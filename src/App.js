import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Head from './components/head/head';
import ProductList from './components/productList/productList';
import SkillList from './components/skillList/skillList';
import BrBox from './components/brBox/brBox';
import Footer from './components/Footer/foot'
import Banner from './components/banner'

class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Banner/>
        <BrBox title={'产品优势'} />
        <ProductList/>
        <BrBox title={'技术优势'} />
        <SkillList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
