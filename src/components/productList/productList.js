import React, { Component } from 'react';
import styles from './productList.scss';
// import HeadIcon from '../../assets/img/'
import { Grid, Row, Col } from 'react-bootstrap';

import img1 from '../../assets/img/Bitmap@2x.png';
import img2 from '../../assets/img/Icon1@2x.png';
import img3 from '../../assets/img/Icon@2x.png';
import img4 from '../../assets/img/Icon4@2x.png';
import img5 from '../../assets/img/Icon3@2x.png';
import img6 from '../../assets/img/Icon2@2x.png';

const data1 = [
    { img:img1, title:'新型数字资产合约', content:'多种数字资产，合约类型多样，杠杆灵活、自由选择，可投票决定' },
    { img:img2, title:'创新指数', content:'基于创新指数开发合约产品，跟踪资产在不同时间框架内的价格波动' },
    { img:img3, title:'外汇合约', content:'数字货币打通多种外汇交易通道，全球即时交易。' },
];

const data2 = [
    { img:img4, title:'ETF组合交易', content:'多样化篮子、易于投资，适合长线' },
    { img:img5, title:'量化交易', content:'发布策略获得平台奖励，量化策略可交易' },
    { img:img6, title:'先进的交易工具', content:'通过智能投顾、技术指标、强大API通知和执行你的交易策略。' },
];

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <Grid className={styles.box}>
                <Row>
                    {
                        data1.map((item, i)=>(
                            <Box src={item.img} title={item.title} content={item.content} key={i} />
                        ))
                    }
                </Row>
                <Row>
                    {
                        data2.map((item, i)=>(
                            <Box src={item.img} title={item.title} content={item.content} key={i} />
                        ))
                    }
                </Row>
            </Grid>
        );

    }
}

class Box extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Col xs={6} md={4} className={styles.cellBox}>
                <div className={styles.imgIcon}>
                    <img src={this.props.src} />
                </div>
                <p className={styles.title}>{this.props.title}</p>
                <p className={styles.content}>{this.props.content}</p>
            </Col>
        );
    }
}
