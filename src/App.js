import React from "react";
import Appbar from "./Components/Appbar";
import Filters from "./Components/Filters";
import Items from "./Components/Items";
import SeasonSpecials from "./Components/SeasonSpecials";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Appbar />
      <Filters />
      <Items />
      <SeasonSpecials />
      <Footer />
    </>
  );
}
export default App;
