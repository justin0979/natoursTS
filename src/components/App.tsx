import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "&components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
