import React, { Component } from 'react';
import styles from './index.scss';
export default class MobileKChart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { contentText } =this.props;
        return (
            <div className={styles["k-chart-box"]}>
                <div className={styles["k-chart"]}>
                    <img src={contentText.kChart}/>
                </div>
                <div className={styles.brBox}/>
                <div className={styles["k-table"]}>
                    <img src={contentText.table}/>
                </div>
            </div>
        );
    }
}
