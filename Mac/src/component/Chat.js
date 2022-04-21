import React, { useState,useEffect } from 'react'
const socketIOClient =require("socket.io-client");

function Chat() {
  const [data, setdata] = useState('');
  const [items, setitems] = useState([]);

  const HandleOnChange = (e) => {
    setdata(e.target.value)
  }

  const HandleSubmit = (e) => {
    console.log(data)
    HandleClick(data)
    e.preventDefault();
    setdata('')
  }

  const HandleClick = (arg) => {
    const socket = socketIOClient(window.location.protocol + "//" + window.location.hostname + ":5000");
    socket.emit("SendMessage", arg)
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
  const AddElement=(data)=>{
   setitems(PrevData=>[{
       id:PrevData.length,
       value:data
       },...PrevData])
}
  return (
    <div className='container'>
      <div className='my-2'>
        <form onSubmit={HandleSubmit} className='d-flex justify-content-center'>
          <select value={data} onChange={HandleOnChange} className="form-select" aria-label="Default select example">
            <option>Open this select menu</option>n
            <option value="system restart">Restart Pc</option>
            <option value="system shutdown">shutdown Pc</option>
            <option value="volume up">VolumeUP</option>
            <option value="volume down">VolumeDown</option>
            <option value="volume mute">Mute</option>
            <option value="start chrome">Open chrome</option>
            <option value="start code">Open Vscode</option>
            <option value="start notepad">Open notepad</option>
            <option value="start explorer">Open File</option>

          </select>
          <input type='submit' className='btn btn-primary mx-2' />
        </form>
      </div>
      <div>

        {
          items.map(item => {
            return <div key={item.id} className="list-group my-2">
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

export default Chat