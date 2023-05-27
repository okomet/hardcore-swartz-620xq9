import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShoeFlag, setFaceShoeFlag] = useState(false);

  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const onclickSwitchShowFlag = () => {
    setFaceShoeFlag(!faceShoeFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShoeFlag || setFaceShoeFlag(true);
      } else {
        faceShoeFlag && setFaceShoeFlag(false);
      }
    }
  }, [num]);

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
