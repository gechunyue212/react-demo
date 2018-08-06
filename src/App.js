import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import Head from './components/head/head'
import Footer from './components/Footer/foot'
import Banner from './components/banner'

class App extends Component {
  render () {
    return (
     <div>
       <Head/>
       <Banner/>
       <Footer/>
     </div>
    )
  }
}

export default App
