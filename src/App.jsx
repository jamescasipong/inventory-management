import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";




function App() {
  const [signIn, change] = useState(true);
  
  return (
    <>
    <section id="login" className={`${signIn ? "" : "hidden"}`}>
      <Login setChange={()=> change(signIn => !signIn)}></Login>
    </section>
    <section id="signup" className={`${signIn ? "hidden": "flex"}`}>
      <Signup setChange={()=> change(signIn => !signIn)}></Signup>
    </section>
    </>
  );
}

export default App;
