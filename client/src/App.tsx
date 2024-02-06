import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
import ReadAboutPackage from "./Components/ReadAboutPackage";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewpage" element={<ViewPage />} />
          <Route path="/viewpage/:id" element={<ReadAboutPackage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
