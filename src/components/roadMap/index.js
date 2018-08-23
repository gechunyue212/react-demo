import React, { Component } from 'react';
import styles from './index.scss';
import RoadMapComponent from './roadMap';

export default class RoadMap extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div id="DevelopmentPath" className={styles.roadMap}>
                <div className={styles.roadMapTitle}>{contentText.title}</div>
                <div style={{width:"100%",height:"225px"}} />
                <RoadMapComponent contentText={contentText} />
            </div>
        );
    }
}
