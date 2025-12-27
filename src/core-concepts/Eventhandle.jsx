import { useState } from "react";

function Eventhandling() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Event Handling in React</h1>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />

      <p>You typed: {message}</p>
    </div>
  );
}

export default Eventhandling;
