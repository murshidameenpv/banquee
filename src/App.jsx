import './App.css'
import Features from './components/Features';

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Savings from './components/Savings';
import Transactions from './components/Transactions';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Transactions />
      <Savings/>
    </>
  );
}

export default App
