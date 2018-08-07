import React from 'react'
import Swiper from 'react-id-swiper'

import 'react-id-swiper/src/styles/css/swiper.css'
import s from './index.scss'
import img1 from '../../assets/img/banner-21.jpg'
import img2 from '../../assets/img/banner-22.jpg'
import img3 from '../../assets/img/banner-23.jpg'

export default class Banner extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const params = {
      loop:true,
      // autoplay:true,//等同于以下设置
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, 
      }
    }
    console.log(s)
    return (
     <div className={s.bannerWrap}>
       <Swiper {...params}>
         <div className={'swiper-banner-item'}>
           <img src={img2} className={'banner-img'} alt=""/>
           <span className={'trade-btn'}>
             交易超市
           </span>
         </div>
         <div className={'swiper-banner-item'}>
           <img src={img1} className={'banner-img'} alt=""/>
         </div>
         <div className={'swiper-banner-item'}>
           <img src={img3} className={'banner-img'} alt=""/>
         </div>

       </Swiper>
       <div className="banner-bottom">
         <div className="banner-bottom-item">
           当前流通量: <span className="orange-text">0 B7coin</span>
         </div>
         <div className="banner-bottom-item">
           今日产出实时数量: <span className="orange-text">0 B7coin</span>
         </div>
         <div className="banner-bottom-item">
           今日待分配收入: <span className="orange-text">0.0000000BTC</span>
         </div>
         <div className="banner-bottom-item">
           昨日已分配收入: <span className="orange-text">0.0000000BTC</span>
         </div>
       </div>
     </div>
    )
  }
}
