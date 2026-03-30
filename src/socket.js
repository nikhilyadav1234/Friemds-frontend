let socket;

export const connectSocket = (user_id) => {
  socket = new WebSocket("ws://localhost:8000");

  socket.onopen = () => {
    console.log("✅ Connected to WS");

    socket.send(JSON.stringify({
      type: "register",
      user_id
    }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("📩 New Message:", data);

    // yahan tu state update karega (chat UI)
  };
};

export const sendMessage = (msg) => {
  socket.send(JSON.stringify(msg));
};