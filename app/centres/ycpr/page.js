"use client";
import React from "react";
import CentreLayout from "../Layout";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import {
  YcprNiti,
  YcprCollab,
  YcprLeg,
  PeopleGroup2,
} from "@/public/assetManager";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import CustomTitle from "@/components/docs/CustomTitle";

const DevelopmentData = [
  {
    title: "",
    desc: "Engage interns in hands-on public policy research, including drafting policy proposals, analytical notes, and governance briefs under expert guidance.",
  },
  {
    title: "",
    desc: "Train policy fellows to dive deep into critical themes like social welfare, governance, and economic reforms.",
  },
  {
    title: "",
    desc: "Provide exposure to parliamentary and legislative analysis, enabling interns to understand law-making processes, debates, and institutional functioning.",
  },
  {
    title: "",
    desc: "Deliver career-oriented capacity-building workshops focused on policy research skills, legislative drafting, and public sector career pathways.",
  },
];

const DevelopmentData2 = [
  {
    title: "",
    desc: "Conduct interactive workshops and dialogues with academicians, bureaucrats, civil society organisations, and elected representatives.",
  },
  {
    title: "",
    desc: "Provide practical exposure to policy formulation, legislative processes and governance challenges through case-based discussions.",
  },
  {
    title: "",
    desc: "Facilitate policy idea incubation and pilot testing, encouraging evidence-driven and field-informed solutions.",
  },

  {
    title: "",
    desc: "Facilitate policy idea incubation and pilot testing, encouraging evidence-driven and field-informed solutions.",
  },
];

const DevelopmentData3 = [
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Policy Blogs:</span> Track key bills,
        government schemes and emerging policy trends, offering clear and
        accessible summaries to inform, engage and stimulate public discourse.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Newsletter:</span> Provides timely responses
        to current issues, featuring in-depth case studies and state or
        scheme-specific policy analysis.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Knowledge Repository:</span> Maintains a
        free, open-access archive of data, policy briefs, infographics and
        community-sourced reports to support collaborative learning and
        evidence-based policy research.
      </span>
    ),
  },
];

const DevelopmentData4 = [
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Constitutional Adherence:</span> The
        constitutional adherence of judgments.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Judicial-People Interface:</span> The
        interplay between the judiciary's role and the people's mandate.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Legal & Parliamentary Gaps:</span> Gaps and
        loopholes in the legal and parliamentary framework.
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
            providing high-quality legislative and policy assistance. Through
            collaboration, research, and tailored support, we bridge the gap
            between policymakers and the people they serve.
          </div>
        </div>

        <div className="w-full pt-20 text-[2.2rem] font-bold font-montserrat">
          Our Key Programs
        </div>

        <div className="-mt-10">
          <ImageTextComp1
            title={"NITI Internship Program"}
            subtitle={""}
            imgSrc={YcprNiti}
            small={true}
            desc={""}
            data={DevelopmentData}
            bullet={true}
          />
        </div>

        <ImageTextComp1
          title={"YCPR Workshops"}
          subtitle={""}
          mirror={true}
          desc={""}
          imgSrc={PeopleGroup2}
          data={DevelopmentData2}
          bullet={true}
          imgX="w-[32rem]"
        />

        <ImageTextComp1
          title={"Publications"}
          subtitle={""}
          desc={""}
          imgSrc={YcprLeg}
          data={DevelopmentData3}
          bullet={true}
        />

        <ImageTextComp1
          title={"Collaborative Projects"}
          subtitle={""}
          mirror={true}
          desc={""}
          imgSrc={YcprCollab}
          data={DevelopmentData4}
          bullet={true}
        />

        <div className="w-full pt-12 text-xl font-semibold ">
          Join us in redefining policy for a vibrant India. Explore
          opportunities, access resources, or collaborate today.
        </div>
      </div>
    </CentreLayout>
  );
};

export default Ycpr;
