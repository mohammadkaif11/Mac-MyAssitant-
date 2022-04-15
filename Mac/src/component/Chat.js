// import React, { useState,useEffect } from 'react'
// import '../App.css'
// const io=require('socket.io-client')

// let socket=io.connect('http://localhost:5000')

// function Chat() {
//   const [UserChat ,setUserChat]= useState([])
//   const [CmChat ,setCmChat]= useState([])
//   const [data,setdata]=useState('')

//   //HandleonClick
//   const HandleOnClick=()=>{
//     console.log(data)
//     socket.emit("Message",data)
//     setUserChat([...UserChat,{id:UserChat.length,value:data}])
//     setdata('')
//   }

//   useEffect(() => {
//     socket.on('ResponseRecived',data=>{
//       console.log(data)
//       setCmChat([...CmChat,{id:CmChat.length ,value:data}])
//     })
//   }, [CmChat])
  
   
//   //OnChange
//   const  onchange=(e)=>{
//      setdata(e.target.value)
//   }
//   return (
//     <div> 
//       <div className='container'>
//         {
//           UserChat.map(item=>{
//             return <div> 
//               <div className="_container" key={item.id}>
//                  <p>{item.value}</p>
//               </div>

//            </div>
//           })
//         }
//       {
//          CmChat.map(item=>{
//           return <div className="_container darker" key={item.id}>
//           <p>{item.value}</p>
//         </div>
//         })
//       }
//       </div>
//       <div className='fixed-bottom container'>
//         <div className="mb-3 d-flex justify-content-center">
//           <input type="text" value={data} onChange={onchange} className="form-control" id="exampleFormControlInput1 mx-2" />
//           <input type='submit' onClick={HandleOnClick} className='btn btn-primary mx-2' />
//         </div>
//       </div>
   
//     </div>
//   )
// }

// export default Chat

import React from 'react'

function Chat() {
  return (
    <div>
          

    </div>
  )
}

export default Chat