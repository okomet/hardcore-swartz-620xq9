import React from "react";

const App = () => {
  const onclickButton = () => alert();
  return (
    <>
      <h1>こんにちは</h1>
      <p>げんき？</p>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};

export default App;
