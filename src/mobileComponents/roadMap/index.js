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
            renderRoadMapComponent: false,
        };
        this.handleListenScroll = this.handleListenScroll.bind(this);
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
    handleListenScroll(){
        const oRoadMap = document.getElementById("MobileRoadMap"),
            _scrollDistance = oRoadMap.offsetTop - oRoadMap.getBoundingClientRect().height;
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= _scrollDistance){
            const { contentText } = this.state;
            this.setState({
                renderRoadMapComponent:true,
                activeBoxHeight:this.getActiveBoxHeight(contentText.items)
            });
            document.removeEventListener("scroll", this.handleListenScroll);
        }
    };
    componentDidMount(){
        document.addEventListener("scroll", this.handleListenScroll);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            contentRootText: nextProps.contentText,
            contentText: nextProps.contentText,
        });
    }
    componentWillUnmount(){
        document.removeEventListener("scroll", this.handleListenScroll);
    }
    render(){
        const { contentText, activeBoxHeight, renderRoadMapComponent } = this.state;
        return (
            <div className={styles.roadMapBox + " " + (renderRoadMapComponent ? styles.roadMapBoxShow : "")} id="MobileRoadMap">
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
