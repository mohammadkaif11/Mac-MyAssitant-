const express =require('express');
const app=express();
const cors=require('cors')
const port =process.env.PORT || 5000;
const http=require('http').createServer();
const io=require('socket.io')(http,{
  cors:{
    origin:"*"
  }
});



//enable cors
app.use(cors())

io.on('connection',(socket)=>{ 
    socket.on("SendMessage",data=>{
      console.log("React send "+data)
      io.emit('SendData',data)
    })
    socket.on('GetResponse',data=>{
     console.log(`machi e Send data ${data}`)
     io.emit('SendResponse',data)

    })
     
    socket.on('OFFL',(data)=>{
      if(data){
        console.log("OFFL is call")
        socket.off('GetResponse')
      }
    })
  

})

http.listen(port,()=>{
    console.log(`server is on ${port}`)
})