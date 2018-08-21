import React, { Component } from 'react';
import styles from './index.scss';


export default class MobileRoadMap extends Component{
    render(){
        const { contentText } = this.props;
        return (
            <div className={styles.roadMapBox} id="MobileRoadMap">
                <img src={contentText.img} />
            </div>
        );
    }
}
