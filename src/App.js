
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import CodeForInterview from "./components/CodeForInterview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//wherever u require routing , wrap that in Routes
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CodeForInterview />}/>
          <Route exact path="/all" element={<AllUser />}/>
          <Route exact path="/add" element={<AddUser />}/>
          <Route exact path="/edit/:id" element={<EditUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
