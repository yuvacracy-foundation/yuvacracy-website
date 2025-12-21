import React from "react";
import SubNav from "@/components/common/Navbar/SubNav";
import MainNav from "@/components/common/Navbar/MainNav";
import PromotionalContent from "@/components/home/promotional";
import Footer from "@/components/common/Footer";
import { CareersHero1 } from "@/public/assetManager";
import SubHero from "@/components/common/Hero";

const navItems = [
  {
    name: "INTERNSHIPS",
    link: "/careers/internships",
    id: "internship-div",
  },
  {
    name: "WORK WITH US",
    link: "/careers/work-with-us",
    id: "work-div",
  },
  {
    name: "WRITE FOR US",
    link: "/careers/write-for-us",
    id: "write-div",
  },
  {
    name: "YuvaCracy Opportunity Cell",
    link: "/careers/yuvacracy-opportunity-cell",
    id: "career-div",
  },
];

const CareerLayout = ({ children }) => {
  return (
    <div>
      <PromotionalContent />
      <MainNav />
      <SubHero title={"YuvaCracy Careers"} subtitle={""} img={CareersHero1} />
      <SubNav navItems={navItems} />
      {children}
      <Footer />
    </div>
  );
};

export default CareerLayout;
