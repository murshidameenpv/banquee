import "./App.css";
import Account from "./components/Account";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Help from "./components/Help";

import Hero from "./components/Hero";
import MobileCard from "./components/MobileCard";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import QuickAccess from "./components/QuickAccess";
import Savings from "./components/Savings";
import Testimonials from "./components/Testimonials";
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
      <Tools />
      <Account />
      <Testimonials />
      <MobileCard/>
      <Help />
      <Blog />
      <QuickAccess />
      <Footer/>
    </>
  );
}

export default App;
