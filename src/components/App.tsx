import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "&components/Header";
import { Button } from "&components/Button";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Button className="btn btn--sticky" href="#">
        To Top
      </Button>
    </BrowserRouter>
  );
};

export default App;
