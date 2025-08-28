import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CascadeLandingPage from "./user/CascadeLandingPage";
import PipelinePage from "./user/PipelinePage";
// import PipelinePage from "./pages/PipelinePage"; // example

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CascadeLandingPage />} />
          <Route path="/pipeline" element={<PipelinePage />} />
        </Route>
      </Routes>
  );
}

export default App;
