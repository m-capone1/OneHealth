import './App.scss';
import RecordDetailsPage from './pages/RecordDetailsPage/RecordDetailsPage';
import RecordList from "./components/RecordList/RecordList";
import recordData from "./Data/data.json";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from './components/Header/Header.jsx';
import TrackerPage from './pages/TrackerPage/TrackerPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route
          path="/records"
          element={<RecordList recordListData={recordData} />}
        />
        <Route path="/record-details/:id" element={<RecordDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
