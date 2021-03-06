import React from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
      <Post />
    </React.Fragment>
  );
}

export default App;
