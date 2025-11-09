import PageEventosAcoes from "./components/pageEventosAcoes";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/menuPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/eventos/:id" element={<PageEventosAcoes />} />
    </Routes>
  );
}

export default App;
