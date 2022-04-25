import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./router/routes";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.component} />
          ))}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
