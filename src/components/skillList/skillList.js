import React, { Component } from 'react';
import styles from './skillList.scss';
import img1 from '../../assets/img/Group 8@2x.png';
import img2 from '../../assets/img/Group 9@2x.png';
import img3 from '../../assets/img/Group 10@2x.png';
import img4 from '../../assets/img/Group 11@2x.png';

const data = [
    { img:img1,},
    { img:img2,},
    { img:img3,},
    { img:img4,},
];

export default class Head extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className={styles.box}>
                {
                    data.map((item, i)=>(
                        <Box src={item.img} title={item.title} content={item.content} key={i} />
                    ))
                }
            </div>
        );

    }
}

class Box extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.cellBox}>
                <div className={styles.imgIcon}>
                    <img src={this.props.src} />
                </div>
            </div>
        );
    }
}
