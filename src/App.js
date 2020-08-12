import React from "react";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Dialogs />
      <Navbar />

      <Hero />
    </>
  );
}

export default App;
