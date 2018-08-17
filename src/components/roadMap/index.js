import React, { Component } from 'react';
import styles from './index.scss';

export default class RoadMap extends Component{
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.roadMap}>
                <div className={styles.content}>
                    <img src={contentText.img} />
                </div>
            </div>
        );
    }
}
