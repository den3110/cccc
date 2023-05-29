import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../../components/Index/Header/Header";
import LeftSidebar from "../../components/Index/LeftSidebar/LeftSidebar";
import "./Index.css"
import Binary from "../../components/Index/Binary/Binary";
import Analys from "../../components/Index/Analys/Analys";

function roundDownToNearest(value, nearest) {
  return Math.floor(value / nearest) * nearest;
}

function roundUpToNearest(value, nearest) {
  return Math.ceil(value / nearest) * nearest;
}

function Index() {

  
  return (
    <>
      <div data-v-049fb53f>

      </div>
      <div data-v-2120bbd4 className="wrapper index">
        <div data-v-2120bbd4="" className="spaceTop"></div>
        <Header />
        <main data-v-2120bbd4 className={"wrapper-main-content primary1"}>
          <LeftSidebar />
          <div data-v-2120bbd4 id="main-content" className="hasSidebar">
            <div data-v-0dc9f329 data-v-2120bbd4 id="binaryPage">
              <section data-v-0dc9f329 className="content position-relative">
                <div data-v-0dc9f329 className="h-100 d-flex flex-lg-row flex-md-row">
                  <Binary />
                  <Analys />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Index;
