import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './foot.scss';
export default class Footer extends Component{
    state={

    }
    render(){
        return(
            <div className={styles.biqiBox}>
                <div className={styles.biqiContent}>
                    <div className={styles.biqiLeft}>
                            <ul>
                                <li>关于我们</li>
                                <li>关于B7</li>
                            </ul>
                            <ul>
                                <li>产品</li>
                                <li>数字货币期货</li>
                                <li>外汇</li>
                            </ul>
                            <ul>
                                <li>条款说明</li>
                                <li>服务条款</li>
                                <li>免责声明</li>
                                <li>投资者敬启</li>
                            </ul>
                    </div>
                    <div className={styles.biqiRight}>
                        <div>
                            <p>联系我们</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <p>联系客服</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className={styles.biqiFooter}>©2018 B7.com.All Right Reserved</div>
            </div>
        )
    }
}