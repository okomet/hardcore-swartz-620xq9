import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onclickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};

export default App;
