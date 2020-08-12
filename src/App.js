import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Dialogs from "./components/Dialogs";
import Hero from "./components/Hero";
import { setHasCollections } from "./state/collections/actions";

function App({ dispatch }) {
  useEffect(() => {
    const saved = localStorage.getItem("collections");
    if (saved) {
      dispatch(setHasCollections(true));
      // (JSON.parse(localStorage.getItem("collections")));
    }
    //   return saved ? set collections : []
  }, []);
  return (
    <>
      <Dialogs />
      <Navbar />
      <Hero />
    </>
  );
}

export default connect()(App);
