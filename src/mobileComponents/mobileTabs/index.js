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
    componentWillReceiveProps(nextProps){
        this.setState({
            contentText:nextProps.contentText 
        })
    }
    render(){
        const { contentText } = this.state
        const { current } = this.state;
        return(
            <div className={s.TabsBox}>
                <ul className={s.Tabs}>
                    <li className={current === "MARKED" ? s.active : "" } onClick={()=>this.changebg("MARKED")}><span className={s.bg}></span>{contentText.head}</li>
                    <li className={current === "USDT" ? s.active : "" } onClick={()=>this.changebg("USDT")}>USDT</li>
                    <li className={current === "BTC" ? s.active : "" } onClick={()=>this.changebg("BTC")}>BTC</li>
                    <li className={current === "ETH" ? s.active : "" } onClick={()=>this.changebg('ETH')}>ETH</li>
                </ul>
                <table>
                     <tbody>
                    {
                      contentText.table.map((item,i)=>(  
                        <tr key={i}>
                            {
                                item.tr.map((p,j)=>(
                                    p.td[0].indexOf("/") == -1?(p.td.length == 1?<td key={j}><span className={s.btn}>{p.td[0]}</span></td>:<td key={j}><span>{p.td[0]}</span><br/><span>{p.td[1]}</span></td>):
                                    <td key={j}><span className={s.star}></span><div style={{marginTop:'0.22rem'}}><span style={{color:'#93A4DA',fontSize:'0.24rem'}}>{p.td[0].split("/")[0]}</span><span style={{color:'#605280',fontSize:'0.24rem'}}>/{p.td[0].split("/")[1]}</span><br/><span>{p.td[1]}</span></div></td>
                                ))
                            }
                        </tr>
                        
                      ))  
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}