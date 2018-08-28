import React ,{ Component } from 'react';
import s from './index.scss';
export default class Tabs extends Component {
    constructor(props){
        super(props);
        this.state={
            contentText:props.contentText,
            current:"USDT",
            choosedArr:[]
        }
    }
    changebg = (current) =>{
        this.setState({
            current
        })
    }

    choose = (option,index) =>{
        let { contentText } = this.state;
        const { choosedArr } = this.state
        contentText[option].tbody[index].active = !contentText[option].tbody[index].active;
        console.log(contentText[option][index]);
        let tempArr = [];
        tempArr.push(contentText[option][index]);
            this.setState({
                contentText,
                choosedArr:tempArr
            })
    }
    render(){
        const { contentText } = this.props
        const { current,choosedArr } = this.state;
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
                                contentText[current].tbody.map((item,i)=>(
                                    <tr key={i}>
                                        {
                                            item.tr.map((p,j)=>(
                                                p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
                                                <td key={j}><span className={s.star+" "+(item.active === true?s.nocheck:s.check)} onClick={()=>this.choose(current, i)}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
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







// {
//     current === "MARKED" ?
//    <span>
//       <tr>
//            {contentText.table.tr.map((item,j)=>(
//                   <td key={j}>{item.td}</td>
//               ))}
//        </tr>
//         {choosedArr.map((item,i)=>(  
//            <tr key={i} className={s.choosed}>
//                {
//                    item.tr.map((p,j)=>(
//                        p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
//                        <td key={j}><span className={s.star}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
//                    ))
//                }
//            </tr>
          
//           ))}  
//       </span>
//       :
//       current === "USDT" ?
//       contentText.table1.map((item,i)=>(  
//           <tr key={i}>
//               {
//                   item.tr.map((p,j)=>(
//                       p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
//                       <td key={j}><span className={s.star+" "+(item.active === true?s.nocheck:s.check)} onClick={()=>this.choose("table1", i)}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
//                   ))
//               }
//           </tr>
          
//       )) 
//       :
//       current === "BTC" ?
//       contentText.table2.map((item,i)=>(  
//           <tr key={i}>
//               {
//                   item.tr.map((p,j)=>(
//                       p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
//                       <td key={j}><span className={s.star+" "+(item.active === true?s.nocheck:s.check)} onClick={()=>this.choose("table2", i)}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
//                   ))
//               }
//           </tr>
          
//       ))
//       :
//       current === "ETH" ?
//       contentText.table3.map((item,i)=>(  
//           <tr key={i}>
//               {
//                   item.tr.map((p,j)=>(
//                       p.td.indexOf("/") == -1?<td key={j}>{p.td}</td>:
//                       <td key={j}><span className={s.star+" "+(item.active === true?s.nocheck:s.check)} onClick={()=>this.choose("table3", i)}></span><span style={{color:'#93A4DA'}}>{p.td.split("/")[0]}</span><span style={{color:'#605280'}}>/{p.td.split("/")[1]}</span></td>
//                   ))
//               }
//           </tr>
          
//       ))
//       :
//       ''
//   }