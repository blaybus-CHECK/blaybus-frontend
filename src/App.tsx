import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getHello, login, signUp } from "./api/hello/hello.ts";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("");

  const onClick = () => {
    getHello().then((res) => {
      console.log(res.data);
      setHello(res.data);
    });
  };

  const onClick2 = () => {
    // signUp().then((res)=>{
    //   console.log(res);
    // })
    login().then((res)=>{
      console.log(res);
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>블레이버스 프론트엔드 데모</h1>
      <h1>저는 이세현입니다.</h1>
      <div className="card">
        <p>{hello}</p>
        <button onClick={onClick2}>api 요청하기</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
