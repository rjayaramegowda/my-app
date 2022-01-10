import React, { useEffect, useState } from "react";

function App(props) {
  const [name, setName] = useState("someone@email.com");

  useEffect(() => {
    console.log("init()");
  }, []);

  return (
    <div className="container">
      <h1>Welcome {name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
}

export default App;
