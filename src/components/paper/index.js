import React, { Component } from 'react';
import styles from './index.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import PDF from '../../assets/img/pdf.png';

const data = [
    {
        iconImg:PDF,
        title:"WHITE PAPER",
        size:"150kb"
    },
    {
        iconImg:PDF,
        title:"ONE PAGER",
        size:"112kb"
    },
    {
        iconImg:PDF,
        title:"LITE PAPER",
        size:"150kb"
    },
];

export default class Paper extends Component {
    constructor(props){
        super(props);
        this.state = {
            actionIndex: 1
        };
    }
    render(){

        const { actionIndex } = this.state;
        const { contentText } = this.props;

        return (
            <Grid className={styles.box}>
                <Row>
                    {
                        data.map((item, i)=>(
                            <Box
                                onMouseEnter={()=>this.setState({actionIndex:i})}
                                onMouseLeave={()=>this.setState({actionIndex:1})}
                                actionClass={actionIndex === i ? styles.actionStatus : ""}
                                src={item.iconImg}
                                title={item.title}
                                size={item.size}
                                key={i}
                            />
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
        const { src, title, size, actionClass, onMouseEnter, onMouseLeave } = this.props;
        return (
            <Col xs={6} md={4} className={styles.cellBox}>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.cell + " " + actionClass}>
                    <div className={styles.iconImg}>
                        <img src={src} />
                    </div>
                    <div className={styles.textBoxTitle}>{title}</div>
                    <div className={styles.textBoxSize}>{size}</div>
                    <div className={styles.textBoxBtn}>Download</div>
                </div>
            </Col>
        );
    }
}
