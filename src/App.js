import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Watch from "./pages/Watch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="/watch" element={<Watch />}/>
      </Route>
    </Routes>
  );
}

export default App;
