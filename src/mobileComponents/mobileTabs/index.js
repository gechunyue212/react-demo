import React ,{ Component } from 'react';
import s from './index.scss';
export default class MobileTabs extends Component{
    constructor(props){
        super(props);
        this.state={
            current:"MARKED",
            contentText:props.contentText
        }
    }
    changebg = (current) =>{
        this.setState({
            current
        })
    }
    choose = (option,index) =>{
        let { contentText } = this.state;
        let temp = contentText.tab
        contentText[option].tbody[index].active = !contentText[option].tbody[index].active;
        if(contentText[option].tbody[index].active === true){
            contentText[temp].tbody.push(contentText[option].tbody[index]);
        }else{
            contentText[temp].tbody.forEach((element,index) => {
                if(element.active === false){
                    contentText[temp].tbody.splice(index,1);
                }
            });
        }
        this.setState({
            contentText,
        })
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            contentText:nextProps.contentText,
            current:nextProps.contentText.tab
        })
    }
    render(){
        const { current,contentText } = this.state;
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
                    {
                    contentText[current].tbody.length!=0?
                      contentText[current].tbody.map((item,i)=>(  
                        <tr key={i} onClick={()=>this.choose(current,i)}>
                            {
                                item.tr.map((p,j)=>(
                                    p.td[0].indexOf("/") == -1?(p.td.length == 1?<td key={j}><span className={s.btn}>{p.td[0]}</span></td>:<td key={j}><span>{p.td[0]}</span><br/><span>{p.td[1]}</span></td>):
                                    <td key={j}><span className={s.star + " "+(item.active===false?s.nocheck:s.check)}></span><div style={{marginTop:'0.22rem'}}><span style={{color:'#93A4DA',fontSize:'0.24rem'}}>{p.td[0].split("/")[0]}</span><span style={{color:'#605280',fontSize:'0.24rem'}}>/{p.td[0].split("/")[1]}</span><br/><span>{p.td[1]}</span></div></td>
                                ))
                            }
                        </tr>
                        
                      ))
                      :
                      <tr><td style={{textAlign:'center'}}>暂无记录</td><td></td><td></td></tr> 
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}