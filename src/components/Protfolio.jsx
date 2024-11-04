import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "./Container";
import portfolio1 from "../assets/portfolio1.png";

const Protfolio = () => {
  return (
    <div id="portfolio" className="lg:py-[100px] py-[40px] ">
      <Container>
        <h2 className="text-center lg:text-[48px] text-[28px] capitalize font-bold font-serif text-black pb-[100px]">
          my skills
        </h2>
        <div className="text-black  px-4 lg:px-0">
          <Tabs>
            <div className="text-center">
              <TabList>
                <Tab>All Page</Tab>
                <Tab>Single Page Website</Tab>
                <Tab>Multipul Page Website</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="flex items-center gap-x-[50px] justify-center flex-wrap">
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center gap-x-[50px] justify-center flex-wrap">
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex items-center gap-x-[50px] justify-center flex-wrap">
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
                <img className="lg:w-[48%] py-5" src={portfolio1} alt="" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Protfolio;
