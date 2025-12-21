"use client";
import React from "react";
import CentreLayout from "../Layout";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg, PeopleGroup1, PeopleGroup2 } from "@/public/assetManager";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import CustomTitle from "@/components/docs/CustomTitle";

const DevelopmentData = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>
        Engage interns in hands-on public policy research, including drafting
        policy proposals, analytical notes, and governance briefs under expert
        guidance.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-12">
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>
        Train policy fellows to dive deep into critical themes like social
        welfare, governance, and economic reforms.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>
        Provide exposure to parliamentary and legislative analysis, enabling
        interns to understand law-making processes, debates, and institutional
        functioning.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>
        Deliver career-oriented capacity-building workshops focused on policy
        research skills, legislative drafting, and public sector career
        pathways.
      </div>
    ),
  },
];

const DevelopmentData2 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Budgetary Reviews
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Analysis of State
        Schemes and Bills
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Constitutional Debates
        and Dispute Resolution
      </div>
    ),
  },
];

const DevelopmentData3 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3 font-bold">
        Policy Analysis Parameters:
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div> Tenure and
        Accountability
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Federalism and
        Comparative Insights
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Gender Implications
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Socio-Economic
        Benefits
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Electoral Impact
        (e.g., is it a vote-bank scheme?)
      </div>
    ),
  },
];

const DevelopmentData4 = [
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>The constitutional
        adherence of judgments.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>The interplay between
        the judiciary's role and the people's mandate.
      </div>
    ),
  },
  {
    title: "",
    desc: (
      <div className="flex flex-row items-center h-3">
        {" "}
        <div className="mr-2 -mt-1 text-4xl">&#8226;</div>Gaps and loopholes in
        the legal and parliamentary framework.
      </div>
    ),
  },
];

const DevelopmentData5 = [
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Holistic Research:</span>Analysis of
        legislative and executive orders.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Accountability and Transparency:</span>
        Ensuring every step is aligned with democratic principles.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="mr-2 font-bold">Expertise Across Domains:</span>
        Bringing together skilled professionals passionate about policy and
        governance.
      </span>
    ),
  },
];

const Ycpr = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>

      <div className="xl:px-[8rem] md:px-[6rem] px-[1rem] flex flex-col">
        <div className="pt-20">
          <CustomTitle title={"YuvaCracy Centre for Policy Research (YCPR)"} />
          <div className="w-full text-lg">
            At YuvaCracy Centre for Policy Research (YCPR), we are committed to
            enhance the effectiveness of India's democratic institutions by
            providing high-quality legislative and policy assistance.
          </div>
        </div>

        <div className="w-full pt-20 text-[2.2rem] font-bold font-montserrat">
          Our Key Programs
        </div>

        <div className="-mt-10">
          <ImageTextComp1
            title={"NITI Internship Program"}
            imgSrc={MeetingImg}
            small={true}
            data={DevelopmentData}
            bulletAlign={true}
          />
        </div>

        <ImageTextComp1
          title={"Policy Research for Think Tanks"}
          subtitle={"Building Informed and Engaged Citizens"}
          mirror={true}
          imgSrc={PeopleGroup1}
          data={DevelopmentData3}
          bulletAlign={true}
        />

        <ImageTextComp1
          title={"State-Level Legislative Insights"}
          imgSrc={PeopleGroup2}
          data={DevelopmentData2}
          bulletAlign={true}
        />

        <ImageTextComp1
          title={"Supreme Court Judgement Analysis"}
          mirror={true}
          imgSrc={PeopleGroup1}
          data={DevelopmentData4}
          bulletAlign={true}
        />

        <ImageTextComp1
          title={"Why YCPR Matters"}
          imgSrc={PeopleGroup2}
          data={DevelopmentData5}
        />
      </div>
    </CentreLayout>
  );
};

export default Ycpr;
