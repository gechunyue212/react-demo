import React, { Component } from 'react';
import styles from './index.scss';

export default class SkillArea extends Component{
    render(){
        return (
            <div className={styles.skillArea}>
                {this.props.children}
            </div>
        );
    }
}
