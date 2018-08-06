import React, { Component } from 'react';
import styles from './banner.scss';
import banner1 from '../../assets/img/banner-1@2x.png';
import banner2 from '../../assets/img/banner-2@3x.png';
import banner3 from '../../assets/img/banner-3@2x.png';
import Swiper from 'react-id-swiper'

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className={styles.banner}>
                <Swiper>
                    <div className={styles.imgBox}>
                        <img src={banner1} />
                    </div>
                </Swiper>
            </div>
        );

    }
}
