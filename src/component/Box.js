import React from 'react'
import "../App.css"
const Box = (props) => {
  let result;
  if(props.title=="Computer"&&props.result!=""&&props.result!="tie")
    {result= props.result=="win"?"lose":"win"}else{
      result=props.result;
    }
  return (
  
    <div >
        <div className={`box ${result}`}>
        <div>{props.title}</div>
        <img className="box-img"src={props.item && props.item.img}/>
        <div>{result}</div>
        </div>
       
    </div>
  )
}

export default Box