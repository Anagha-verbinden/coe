import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />

      <main className="ml-[360px] min-h-screen w-[calc(100%-360px)] bg-[#f5f6f8] p-10">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;