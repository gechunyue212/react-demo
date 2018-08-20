import React, { Component } from 'react';
import styles from './index.scss';
import RoadMap from '../../assets/mobileImg/roadmap@3x.png'

export default class MobileRoadMap extends Component{
    render(){
        return (
            <div className={styles.roadMapBox} id="MobileRoadMap">
                <img src={RoadMap} />
            </div>
        );
    }
}
