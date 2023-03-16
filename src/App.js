import TopBar from './components/topbar/TopBar'
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
        <TopBar/>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/posts" element={<Homepage />}/>
        </Routes>
    </Router>
        
  )
}

export default App;
