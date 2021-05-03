import React from "react";

function App() {
  setTimeout(gettime, 1000);
  const [time, settime] = React.useState("TIME");

  function gettime() {
    var time = new Date().toLocaleTimeString();
    settime(time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
