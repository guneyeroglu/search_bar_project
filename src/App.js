import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
