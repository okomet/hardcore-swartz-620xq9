import React from "react";
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const onclickButton = () => alert();
  const contentLedyStyle = {
    color: 'pink',
    fontSize: '18px'
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage />
      <p style={contentLedyStyle}>げんきです！</p>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};

export default App;
