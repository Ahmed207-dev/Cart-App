
import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Proudcts from "./component/Proudcts";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Proudcts />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
