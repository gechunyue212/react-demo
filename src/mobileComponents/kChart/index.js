import React, { Component } from 'react';
import styles from './index.scss';
import MobileTabs from '../mobileTabs';
import MyChart from '../../components/KChart/chart';

export default class MobileKChart extends Component{
    constructor(props){
        super(props);
        this.state={
            content:props.content,
            contentText:props.contentText
        }
    }
    componentWillReceiveProps(nextProps){
            this.setState({
                content:nextProps.content
            })
    }
    render(){
        const { content, contentText } = this.state;
        return (
            <div className={styles["k-chart-box"]}>
                <div className={styles["k-chart"]}>
                    {/*<img src={contentText.kChart}/>*/}
                    <MyChart contentText={contentText} isMobile={true} />
                </div>
                <div className={styles.brBox}/>
                <div className={styles["k-table"]}>
                    {/* <img src={contentText.table}/> */}
                    <MobileTabs contentText={content}/>
                </div>
            </div>
        );
    }
}
