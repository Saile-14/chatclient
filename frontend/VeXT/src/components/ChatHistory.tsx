
export const ChatHistory = ({ chatHistory  }) => {
  
  const messages = chatHistory.map((msg, index: number) => (
    <p key={index}>{msg.data}</p>
  ));

  return (
    <div className="bg-amber-100 m-0 p-20">
      <h2 className="m-0 p-0 text-black">Chat History</h2>
      {messages}
    </div>
  );
};


