import React from "react";
import NavResource from "../components/assets/NavResource";
// import CoverSearch from "../components/resourcesPage/coverSearch";
// import Nav from "../components/assets/Nav";
import Footer from "../components/LandingPage.js/Footer";
import CoverSearch from "../components/resourcesPage/coverSearch";
import ConnectionList from "../components/createPage/connectionList";
import ResourceBody from "../components/resourcesPage/ResourceBody";
import QueResource from "../components/resourcesPage/queResource";

export default function Create() {
  return (
    <>
    <NavResource/>
    <CoverSearch/>
    <ResourceBody/>
    <QueResource/>
    <Footer/>
    </>
  );
}
