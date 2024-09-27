const io = require ("socket.io")(3001,{cors:{orgin:"http://localhost:3000"}})

io.on("connection", (socket) => {
    console.log("User is connected", socket.id);

    socket.on ("chat message", (msg,room) => {
       

        
        if (room === "") {
            socket.broadcast.emit("message-receive",msg)


        }else{
            socket.to(room).emit("message-receive",msg)
        }
    }) 
    socket.on("joinroom", (room) => {
        socket.join(room)
    })
    
    socket.on ("disconnect", ()=>{
        console.log("User Disconnected");
        
    })
    
})

