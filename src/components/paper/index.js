import React, { Component } from 'react';
import styles from './index.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import PDF from '../../assets/img/pdf.png';

export default class Paper extends Component {
    constructor(props){
        super(props);
        this.state = {
            actionIndex: null
        };
    }
    render(){

        const { actionIndex } = this.state;
        const { contentText } = this.props;

        return (
            <Grid className={styles.box}>
                <Row>
                    {
                        contentText.items.map((item, i)=>(
                            <Box
                                onMouseEnter={()=>this.setState({actionIndex:i})}
                                onMouseLeave={()=>this.setState({actionIndex:null})}
                                actionClass={actionIndex === i ? styles.actionStatus : ""}
                                src={PDF}
                                title={item.text}
                                size={item.size}
                                downloadText={contentText.btnText}
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
        const { src, title, size, downloadText, actionClass, onMouseEnter, onMouseLeave } = this.props;
        return (
            <Col xs={9} md={6} className={styles.cellBox}>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.cell + " " + actionClass}>
                    <div className={styles.iconImg}>
                        <img src={src} />
                    </div>
                    <div className={styles.textBoxTitle}>{title}</div>
                    <div className={styles.textBoxSize}>{size}</div>
                    <div className={styles.textBoxBtn}>{downloadText}</div>
                </div>
            </Col>
        );
    }
}
