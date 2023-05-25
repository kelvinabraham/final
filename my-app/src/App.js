import React from "react";
import LinkContainer from "./components/LinkContainer";
import { useEffect, useState } from "react";
function App() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <LinkContainer />
    </div>
  );
}

export default App;
