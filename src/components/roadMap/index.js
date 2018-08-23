import React, { Component } from 'react';
import styles from './index.scss';
import RoadMapComponent from './roadMap';

export default class RoadMap extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div id="DevelopmentPath" className={styles.roadMap}>
                <div className={styles.content}>
                    <img src={contentText.img} />
                </div>
            </div>
        );
    }
}
