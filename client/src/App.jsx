import "./App.scss";
import RecordList from "./components/RecordList/RecordList";
import recordData from "./Data/data.json";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route
          path="/records"
          element={<RecordList recordListData={recordData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
