import React, { Component } from 'react';
import styles from './roadMap.scss';

export default class RoadMap extends Component{
    constructor(props){
        super(props);

        this.state = {
            contentRootText: props.contentText,
            contentText: props.contentText,
            actionBarWidth: 0,
        };
        // 运动定时器
        this.timer = null;
    }

    handleAnimation = (start = 0, end) => {
        let _distance = start, speed;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            speed = (end - _distance)/6;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            _distance += speed;
            if(end === _distance){
                clearInterval(this.timer);
                this.setState({actionBarWidth:end});
            }
            this.setState({ actionBarWidth:_distance });
        }, 12);
    };

    handleCircleActive = (index) => {
        let { contentText, actionBarWidth } = this.state, _distance;
        contentText.items.forEach((item,i)=>{
            if(index === i){
                item.active = true;
                _distance = item.leftMargin;
            }else{
                item.active = false;
            }
        });
        this.setState({ contentText });
        this.handleAnimation(actionBarWidth, _distance+5);
    };

    componentDidMount(){
        const { contentText } = this.props;
        let actionBarWidth = 0;
        let actionsWidth = [];
        contentText.items.every((item)=>{
            actionsWidth.push(item.leftMargin);
            if(item.active){
                actionBarWidth = item.leftMargin + 5;
                return false;
            } else {
                return true;
            }
        });
        this.handleAnimation(0, actionBarWidth);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            contentRootText: nextProps.contentText,
            contentText: nextProps.contentText,
        });
    }

    render(){

        const { contentText, actionBarWidth } = this.state;
        return (
            <div className={styles.roadMap}>
                <div className={styles.progressBar}>
                    <div className={styles.progressBarNormal}/>
                    <div style={{width:`${actionBarWidth}px`}} className={styles.progressBarAction}/>
                </div>
                {
                    contentText.items.map((item, i)=>{
                        const textTop = item.turnDown ? 50 : (-(item.content.length + 3)*20);
                        return (
                            <div key={i} style={{left:`${item.leftMargin}px`}} className={styles.roadMapItem}>
                                <Circle
                                    key={`Circle${i}`}
                                    isActive={item.active}
                                    turnDown={item.turnDown}
                                    keepForward={item.active}
                                    onClick={()=>this.handleCircleActive(i)}
                                />
                                <TextBox style={{top:`${textTop}px`}} contentList={item.content} title={item.title} key={`TextBox${i}`} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}


class Circle extends Component{
    render(){
        const { isActive, keepForward, turnDown, onClick } = this.props;
        return (
            <div onClick={onClick} className={styles.circleBox}>
                <div className={styles.circleTextBar + " " + (turnDown ? styles.barDown : styles.barUp)}/>
                <div className={styles.circleActiveBox + " " + (isActive ? styles.circleActive : "") + " " + (keepForward ? styles.keepForward : "")}/>
                <div className={styles.circle}/>
            </div>
        );
    }
}

// PC、移动公用

// 文字块
export class TextBox extends Component{
    render(){

        const { contentList, title, style, className } = this.props;

        return (
            <div style={style} className={styles.textBox + " " + (className ? className : "")}>
                <div className={styles.textBoxTitle}>{title}</div>
                {
                    contentList.map((item, i)=>(
                        <div key={i} className={styles.textBoxContent}>{item}</div>
                    ))
                }
            </div>
        );
    }
}
