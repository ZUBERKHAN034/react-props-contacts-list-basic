import React from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import users from "./profiles";
function App() {
  return (
    <>
      <Heading />
      <Card {...users.one} />
      <Card {...users.two} />
      <Card {...users.three} />
    </>
  );
}

export default App;
