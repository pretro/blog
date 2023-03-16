import TopBar from './components/topbar/TopBar'
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const currentUser = true;
  return (
    <Router>
        <TopBar/>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/posts" element={<Homepage />}/>
            <Route path="/post/:id" element={<Single />}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/register" element= {currentUser ? <Homepage /> : <Register />}/>
            <Route path="/login" element= {currentUser ? <Homepage /> : <Login />}/>
        </Routes>
    </Router>
        
  )
}

export default App;
