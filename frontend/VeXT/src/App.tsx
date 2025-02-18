import { useEffect, useState } from "react";
import { connect, sendMsg } from "./api"
import { ChatHistory } from "./components/ChatHistory";
import { Header } from "./components/Header";

function App() {


  const [chatHistory, setChatHistory] = useState([])

  useEffect(()=> { connect((msg:MessageEvent<string>) => {
    console.log("New message", msg, msg.data);
    // @ts-ignore
    setChatHistory((prevHistory) => [...prevHistory, msg])
  })},[])

  return (
    <>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button className="m-12 bg-blue-400 " onClick={() => {sendMsg("hi thereee!")}}>Press this to say something</button>
      
    </>
  )
}

export default App
