import React, { Component } from 'react';
import styles from './index.scss';
import RoadMapComponent from './roadMap';

export default class RoadMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            renderRoadMapComponent:false
        };
        this.handleListenScroll = this.handleListenScroll.bind(this);
    }

    handleListenScroll(){
        const oRoadMap = document.getElementById("DevelopmentPath"),
            _scrollDistance = oRoadMap.offsetTop - oRoadMap.getBoundingClientRect().height;
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop >= _scrollDistance){
            this.setState({
                renderRoadMapComponent:true
            });
            document.removeEventListener("scroll", this.handleListenScroll);
        }
    };

    componentDidMount(){
        document.addEventListener("scroll", this.handleListenScroll);
    }

    componentWillUnmount(){
        document.removeEventListener("scroll", this.handleListenScroll);
    }

    render(){

        const { contentText } = this.props;
        const { renderRoadMapComponent } = this.state;

        return (
            <div id="DevelopmentPath" className={styles.roadMap}>
                <div className={styles.roadMapTitle}>{contentText.title}</div>
                <div style={{width:"100%",height:"225px"}} />
                {
                    renderRoadMapComponent ?
                        <div className={styles.roadMapBox}>
                            <RoadMapComponent contentText={contentText} />
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}
