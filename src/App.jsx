import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import { Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/programs" element={<Programs/>}/>
      </Routes>
      
    </>
  );
}

export default App;
