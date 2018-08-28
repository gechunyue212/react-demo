import React, { Component } from 'react';
import styles from './index.scss';
import { Cle, TextBox } from '../../components/roadMap/roadMap';

export default class MobileRoadMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeBoxHeight: 0,
            contentRootText: props.contentText,
            contentText: props.contentText,
        };
    }
    handleChangeActive = (index) => {
        let { contentText } = this.state;
        contentText.items.forEach((item)=>{
            item.active = false;
        });
        contentText.items[index].active = true;
        this.setState({ activeBoxHeight:this.getActiveBoxHeight(contentText.items), contentText });
    };
    getActiveBoxHeight = (contentItems) => {
        let activeBoxHeight = 0;
        contentItems.every((item)=>{
            if (item.active) {
                return false;
            }else{
                activeBoxHeight += parseInt(item.boxHeight.split("rem")[0]*100);
                return true;
            }
        });
        return activeBoxHeight || 1;
    };
    componentDidMount(){
        const { contentText } = this.props;
        this.setState({ activeBoxHeight:this.getActiveBoxHeight(contentText.items) });
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            contentRootText: nextProps.contentText,
            contentText: nextProps.contentText,
        });
    }
    render(){
        const { contentText, activeBoxHeight } = this.state;
        return (
            <div className={styles.roadMapBox} id="MobileRoadMap">
                {/*<img src={contentText.img} />*/}
                <div className={styles.roadMapTitle}>{contentText.title}</div>
                <div className={styles.roadMapContent}>
                    <div className={styles.roadMapContentLeftActiveBox + " " + (activeBoxHeight>0 ? styles.transitionActive : "")} style={{height:`${activeBoxHeight/100}rem`}} />
                    {
                        contentText.items.map((item, i)=>(
                            <div key={i} style={{height:item.boxHeight}} className={styles.roadMapContentItemBox}>
                                <Circle
                                    isActive={item.active}
                                    keepForward={item.active}
                                    onClick={()=>this.handleChangeActive(i)}
                                />
                                <TextBox style={{left:"0.72rem",top:"-0.2rem"}} contentList={item.content} title={item.title}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}


class Circle extends Component{
    render(){
        const { isActive, keepForward, onClick } = this.props;
        return (
            <div onClick={onClick} className={styles.circleBox}>
                <div className={styles.circleTextBar}/>
                <div className={styles.circleActiveBox + " " + (isActive ? styles.circleActive : "") + " " + (keepForward ? styles.keepForward : "")}/>
                <div className={styles.circle}/>
            </div>
        );
    }
}
