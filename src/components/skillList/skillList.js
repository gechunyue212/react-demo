import React, { Component } from 'react';
import styles from './skillList.scss';
import { Grid, Row, Col } from 'react-bootstrap';

export default class SkillList extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const { contentText, language } = this.props;

        return (
            <Grid className={styles.box}>
                <Row>
                    {
                        contentText.technology.map((item, i)=>(
                            <Box language={language} src={item.iconImg} title={item.title} content={item.description} key={i} />
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
        const { src, title, content, language } = this.props;
        let heightStyle;
        if(language === "EN"){
            heightStyle = styles.heightEn;
        }else if(language === "JAP"){
            heightStyle = styles.heightJap;
        }else{
            heightStyle = styles.heightCn;
        }
        return (
            <Col xs={9} md={6} className={styles.cellBox}>
                <div className={styles.cell}>
                    <div className={styles.iconImg}>
                        <img src={src} />
                    </div>
                    <div className={styles.textBox + " " + (heightStyle)} >
                        <div className={styles.textBoxTitle}>{title}</div>
                        <div className={styles.brBox} />
                        {
                            content.map((item, i) => (
                                <div key={i} className={styles.textBoxContent}>
                                    <div  className={styles.textBoxContentIcon} />
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Col>
        );
    }
}
