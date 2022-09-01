import { Routes, Route } from "react-router-dom";
import ContextUsedPage from "./ContextUsedPage";
import CounterContextPage from "../Pages/CounterContext";

const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/Context-Used" element={<ContextUsedPage />} />
        <Route path="/context-counter" element={<CounterContextPage />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
