import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import YourWork from "./component/YourWork";
import Footer from "./component/footer";
import Sponsors from "./component/sponsor";
import React from "react";

export default function Home() {
  return (
      <div>

        <Navbar />
        <Hero/>
        <YourWork/>
        <Sponsors/>
        <Footer/>
      </div>
      
  );
}
