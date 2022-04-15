import React, { useEffect, useState } from 'react'
//const io = require('socket.io-client')
const socketIOClient =require("socket.io-client");

//let socket = io.connect('http://192.168.78.50:5000')
//let socket = io.connect('http://localhost:5000')
//const socket = socketIOClient("http://localhost:5000");


function TaskManger() {
    const [data, setdata] = useState('');
    const [Int, setInt] = useState(null);
    const [items,setitems]=useState([]);

    const HandleOnChange = (e) => {
        setdata(e.target.value)
    }
       
    const HandleSubmit=(e)=>{
        if(Int==null){
            console.log("Handle submit is calll")
            HandleClick(data);
        }else{
            console.log("Handle sbumit is call clrae in")
            console.log(Int)
            clearInterval(Int);
            setInt(null)
            HandleClick(data)
        }
        e.preventDefault();
        setdata('')
    }
    const HandleClick =(arg)=>{
        const socket = socketIOClient(window.location.protocol+"//"+window.location.hostname+":5000");
        console.log(arg)
       let Intvar=setInterval(() => {
                socket.emit("SendMessage",arg)
        }, 12000);
        setInt(Intvar)
    }
    const AddElement=(data)=>{
         console.log("Add Element is called")
        setitems(PrevData=>[{
            id:PrevData.length,
            value:data
            },...PrevData])
    }
     useEffect(()=>{
      const socket = socketIOClient(window.location.protocol+"//"+window.location.hostname+":5000");
      socket.on('SendResponse',(Res)=>{
        console.log(Res)
        AddElement(Res);
      })     
      return()=>{
          socket.off('SendResponse')
      }
     },[])
    
    return (
        <div className='container'>
            <div className='my-2'>
                <form onSubmit={HandleSubmit}  className='d-flex justify-content-center'>
                    <select value={data} onChange={HandleOnChange} className="form-select" aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">ALL</option>
                        <option value="2">CPU</option>
                        <option value="3">LaptopTemprature</option>
                        <option value="4">Ram</option>
                    </select>
                    <input type='submit' className='btn btn-primary mx-2'/>
                </form>
            </div>
            <div>
               
                {
                    items.map(item => {
                        return  <div key={item.id} className="list-group my-2">
                        <li className="list-group-item list-group-item-action" >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.value}</h5>
                                {/* <small>{item.time   }</small> */}
                            </div>
                        </li>
                    </div>
                    })
                }
            </div>

        </div>
    )
}

export default TaskManger