import React, { Component } from 'react';
import styles from './productList.scss';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const { contentText } = this.props;

        return (
            <div className={styles.borderBox}>
                <Grid className={styles.box}>
                    <Row>
                        {
                            contentText.products.map((item, i)=>(
                                <Box src={item.iconImg} title={item.title} content={item.description} key={i} />
                            ))
                        }
                    </Row>
                </Grid>
            </div>
        );

    }
}

class Box extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { src, title, content } = this.props;
        return (
            <Col xs={6} md={4} className={styles.cellBox}>
                <div className={styles.imgIcon}>
                    <img src={src} />
                </div>
                <p className={styles.title}>{title}</p>
                <p className={styles.content}>{content}</p>
            </Col>
        );
    }
}
