import { Button } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Route path="/" component={Homepage} exact />
          {/* since '/' is also include in '/chats' so both will be rendered in order to avoid this we are using exact */}
          <Route path="/chats" component={Chatpage} />
        </div>
      </Routes>
    </Router>
  );
}

export default App;
