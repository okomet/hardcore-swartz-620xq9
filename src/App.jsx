import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [faceShoeFlag, setFaceShoeFlag] = useState(true);

  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const onclickSwitchShowFlag = () => {
    setFaceShoeFlag(!faceShoeFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onclickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onclickSwitchShowFlag}>on/off</button>
      {faceShoeFlag && <p>(≧▽≦)</p>}
    </>
  );
};

export default App;
