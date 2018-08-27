import React, { Component } from 'react';
import styles from './index.scss';
import MyKChart from './chart';

export default class KChart extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){


        const { contentText } = this.props;

        return (
            <div className={styles["k-chart"]}>
                <div className={styles["k-chart-num"]}>
                    {
                        contentText.numItems.map((item, i)=>(
                            <div className={styles["k-chart-numItem"]} key={i}>
                                <div className={styles["k-chart-numItem-num"]}>{item.number}</div>
                                <div title={item.title} className={styles["k-chart-numItem-title"]}>{item.title}</div>
                            </div>
                        ))
                    }
                </div>
                {/*<div className={styles["k-chart-content"]}>*/}
                    {/*<img src={contentText.kChart} />*/}
                {/*</div>*/}
                <div className={styles["k-chart-content"]}>
                    <MyKChart contentText={contentText} />
                </div>
            </div>
        );
    }
}
