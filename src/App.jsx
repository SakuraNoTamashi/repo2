import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import ServicesPage from "./pages/services";

import ProjectsPage from "./pages/projects";
import ProjectPage from "./pages/project";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/projects' exact element={<ProjectsPage />} />
      <Route path='/project' element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
