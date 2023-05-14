import React from "react";

const App = () => {
  const onclickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <p style={contentStyle}>げんき？</p>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};

export default App;
