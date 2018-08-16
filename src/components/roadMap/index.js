import React, { Component } from 'react';
import styles from './index.scss';

export default class RoadMap extends Component{
    render(){
        return (
            <div className={styles.roadMap}>
                <div className={styles.title}>Roadmap</div>
                <div className={styles.content}>
                    <img src="" />
                </div>
            </div>
        );
    }
}
