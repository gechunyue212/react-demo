import React, { Component } from 'react';
import styles from './roadMap.scss';

export default class RoadMap extends Component{
    render(){
        return (
            <div className={styles.roadMap}>
                <div className={styles.progressBar}>
                    <div className={styles.progressBarNormal}/>
                    <div className={styles.progressBarAction}/>
                </div>
                <Circle/>
            </div>
        );
    }
}


class Circle extends Component{
    render(){
        const { isActive } = this.props;
        return (
            <div className={styles.circleBox}>
                <div className={styles.circleActiveBox}/>
                <div className={styles.circle + " " + styles.circleActive}/>
            </div>
        );
    }
}
