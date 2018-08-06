import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Head from './components/head/head';
import Footer from './components/Footer/foot'

class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Footer/>
      </div>
    );
  }
}

export default App;
