import React,{useState,useEffect} from 'react'
import { AiFillDelete } from "react-icons/ai";
const Todo = () => {
// localStorage.removeItem("item")

  let [currentType,setCurrentType]=useState("")
  let [statev,setStatev]=useState()
    // const stars = Array(10).fill("*").map((item, index) =>
    // <span key={index} style={{marginLeft:"40px"}}>{item}</span>);
   useEffect(()=>{
    let state=JSON.parse(localStorage.getItem("item"))
    if(state==null){
localStorage.setItem("item",JSON.stringify([]))
    }
    else{
      let val=JSON.parse(localStorage.getItem("item"))
      setStatev(val)
    }
   },[])
   
 
  console.log(statev);
  
  let addItem=()=>{
    if(currentType){
      let newValue=currentType.toUpperCase().trim()
      console.log(newValue)
        let date=new Date()
        let dateyear=date.toLocaleDateString()
        let time=date.toLocaleTimeString()
        let obj={dateyear,time,newValue}
        let getArray=JSON.parse(localStorage.getItem("item"))
        let newArray=[...getArray,obj]
        localStorage.setItem("item",JSON.stringify(newArray))
       setStatev(newArray)
       setCurrentType("")
    }
   
  }
let deleteItem=(index)=>{
  let getArray=JSON.parse(localStorage.getItem("item"))
  let newValue=getArray.filter((a,b)=>{
    return b!==index
  })
  localStorage.setItem("item",JSON.stringify(newValue))
  setStatev(newValue)
}
  return (
    <div className='todo-home'>
       {/* nav start*/}
       <nav className='pt-3'>
        <div className='container'>
      <div className='row row-gap-2'>
        <div className='col-8 col-md-6 '>
            <input  className='w-100   inp-box' placeholder='Enter Item'
            onChange={(e)=>setCurrentType(e.target.value)} value={currentType}/></div>
        <div className='col-4 col-md-3 d-flex justify-content-end '>
            <button className='btn btn-sm btn-info border-primary' onClick={addItem}>Add</button></div>
        <div className='col-12 col-md-3 d-flex justify-content-end'>
            <button className='btn btn-sm btn-info border-primary' disabled title='in future unlock'>History</button></div>
      </div>
      </div>
     </nav>
 {/* <div className='mt-3'>{stars}</div> */}
       {/* nav end*/}
       <div className='mt-2 mt-md-5 '>{/*  row-gap-2 */}
        {statev?.map((a,b)=>{
            return <div className='text-light d-flex justify-content-center align-items-center mt-2' key={b} >
              <div className='msgbox p-2'>
              <AiFillDelete style={{ color: "aqua", fontSize: "20px" }}  onClick={()=>deleteItem(b)}/>
                <div style={{width:"100%"}}><p className='w-100'>{a.newValue}</p></div>
                 <div className='d-flex justify-content-end align-item-center createtime '>Create Time</div>
                 <div className='d-flex justify-content-end createtime'>{a.time}</div>
                 <div className='d-flex justify-content-end createtime'>{a.dateyear}</div>
              </div>
            </div>
        })}
       </div>
    </div>
  )
}
export default Todo