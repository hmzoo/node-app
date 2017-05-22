const setConnected= (cxn)=>{
  return {
    type: "SET_CONNECTED",
    connected:cxn
  };
}

const newMessage= (msg)=>{
  return {
    type: "NEW_MESSAGE",
    message:msg
  };
}

export {setConnected,newMessage};
