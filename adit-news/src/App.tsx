import { Routes, Route } from "react-router-dom";
import { NewsContextProvider } from "./context/newsContext";
import "./App.css";
import "./components/override.css";
import { Home, Techno, BBC } from "./Pages/Home";

function App() {
  return (
    <>
      <NewsContextProvider>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Techno />} />
          <Route path="/bbc" element={<BBC />} />
        </Routes>
        {/* </BrowserRouter> */}
      </NewsContextProvider>
    </>
  );
}

export default App;
