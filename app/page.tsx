"use client"

import Section1 from "./_pages/section1";
import Section2 from "./_pages/section2";
import Section3 from "./_pages/section3";
import Section4 from "./_pages/section4";
import Section5 from "./_pages/section5";
import Section1Mobile from "./_pages/section1Mobile";
import Section2Mobile from "./_pages/section2Mobile";
import Section3Mobile from "./_pages/section3Mobile";
import Section4Mobile from "./_pages/section4Mobile";
import Section5Mobile from "./_pages/section5Mobile";
import './style.css';

export default function Home() {
  return (
    <>
      <div className="desktop">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <div className="mobile">
        <Section1Mobile />
        <Section2Mobile />
        <Section3Mobile />
        <Section4Mobile />
        <Section5Mobile />
      </div>
    </>
  );
}