import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "/pages/Dashboard";
import CreateEvent from "/pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/create"
          element={<CreateEvent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;