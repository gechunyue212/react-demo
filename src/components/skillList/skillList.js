import React, { Component } from 'react';
import styles from './skillList.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/img/Group 8@2x.png';
import img2 from '../../assets/img/Group 9@2x.png';
import img3 from '../../assets/img/Group 10@2x.png';
import img4 from '../../assets/img/Group 11@2x.png';

const data1 = [
    { img:img1,},
    { img:img2,},
];

const data2 = [
    { img:img3,},
    { img:img4,},
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
            <Col xs={9} md={6} className={styles.cellBox}>
                <div className={styles.imgIcon}>
                    <img src={this.props.src} />
                </div>
            </Col>
        );
    }
}
