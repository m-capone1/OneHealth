import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
    {/* <p>Landing Page</p> placeholder */}
      <Link to="/chat" className="homepage__link">
        Go to Chat
      </Link>
    </div>
  );
};

export default HomePage;
