import "./App.css";
import Features from "./components/Features";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Savings from "./components/Savings";
import ThirdParty from "./components/ThirdParty";
import Tools from "./components/Tools";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Transactions />
      <Savings />
      <Notification />
      <ThirdParty />
      <Tools/>
    </>
  );
}

export default App;
