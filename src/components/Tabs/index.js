import React ,{ Component } from 'react';
import s from './index.scss';
export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state={
            contentText1:props.contentText,
            current:"USDT"
        }
    }
    changebg = (current) =>{
        this.setState({
            current
        })
    }

    choose = (option,index) =>{
        let { contentText1 } = this.state;
        let temp = contentText1.tab
        contentText1[option].tbody[index].active = !contentText1[option].tbody[index].active;
        if(contentText1[option].tbody[index].active === true){
            contentText1[temp].tbody.push(contentText1[option].tbody[index]);
        }else{
            contentText1[temp].tbody.forEach((element,index) => {
                if(element.active === false){
                    contentText1[temp].tbody.splice(index,1);
                }
            });
        }
        this.setState({
            contentText1,
        })
    }
    render(){
        const { contentText1,current } = this.state;
        const { contentText } = this.props;
        return(
            <div className={s.TabsBox}>
                <ul className={s.Tabs}>
                    <li className={current === "MARKED" ? s.active : "" } onClick={()=>this.changebg("MARKED")}><span className={s.bg}></span>{contentText.tab}</li>
                    <li className={current === "USDT" ? s.active : "" } onClick={()=>this.changebg("USDT")}>USDT</li>
                    <li className={current === "BTC" ? s.active : "" } onClick={()=>this.changebg("BTC")}>BTC</li>
                    <li className={current === "ETH" ? s.active : "" } onClick={()=>this.changebg('ETH')}>ETH</li>
                </ul>
                <table>
                     <tbody>
                         <tr>
                            {
                                
                                contentText.thead.map((item,i)=>(
                                    <td key={i}>{item}</td>
                                ))
                            }
                         </tr>
                            {
                                contentText1[current].tbody.length!=0?
                                contentText1[current].tbody.map((item,i)=>(
                                    <tr key={i}>
                                        {
                                            item.tr.map((p,j)=>(
                                                p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
                                                <td key={j}><span className={s.star+" "+(item.active === true?s.nocheck:s.check)} onClick={()=>this.choose(current, i)}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
                                            ))
                                        }
                                    </tr>
                                ))
                                :
                                <tr><td>暂无记录</td><td></td><td></td><td></td><td></td><td></td></tr>
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}







