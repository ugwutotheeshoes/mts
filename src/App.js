import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Genre, Shows, Homepage, Account } from "./pages";
import {
  Action,
  Adventure,
  Animation,
  Comedy,
  Crime,
  Family,
  Horror,
  Scifi,
  Series,
} from "./genres";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/genre" element={<Genre />}>
          <Route path="/genre:id" element={<Action />} />
          <Route path="/genre:id" element={<Adventure />} />
          <Route path="/genre:id" element={<Animation />} />
          <Route path="/genre:id" element={<Comedy />} />
          <Route path="/genre:id" element={<Crime />} />
          <Route path="/genre:id" element={<Family />} />
          <Route path="/genre:id" element={<Horror />} />
          <Route path="/genre:id" element={<Scifi />} />
          <Route path="/genre:id" element={<Series />} />
        </Route>
      </Routes>
      {/* <Sidebar /> */}
      <Footer />
      </Router>
    </div>
  );
}

export default App;
