import React ,{ Component } from 'react';
import s from './index.scss';
export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state={
            current:"MARKED"
        }
    }
    changebg = (current) =>{
        this.setState({
            current
        })
    }
    render(){
        const { contentText } = this.props
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
                                    p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
                                    <td key={j}><span className={s.star}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
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