import React from "react";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import LineChart from "./Components/Chart";
import Cards from "./Components/Cards";
import HorizentalGraph from "./Components/HorizentalGraph";
import VerticalGraph from "./Components/VerticalGraph";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="md:flex">
      <Sidebar />

      <div className="md:mx-5 mx-1">
        <div className="mb-5">
          <Header />
        </div>
        <div className="md:flex">
          <div>
            <div className="md:w-[500px] lg:w-[750px] w-full mb-5">
              <Jumbotron />

              <LineChart />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-3 md:mb-[50px]">
              <HorizentalGraph />
            </div>
            <div>
              <VerticalGraph />
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default App;
