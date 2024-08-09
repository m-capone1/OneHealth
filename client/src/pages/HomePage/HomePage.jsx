import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";

const HomePage = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(prev => !prev)
}

  return (
    <> 
      <Header isloggedIn={isloggedIn} handleLogin={handleLogin} />
      <Hero isloggedIn={isloggedIn} />
 </>
  );
};

export default HomePage;
