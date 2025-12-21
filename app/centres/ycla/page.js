"use client";
import React from "react";
import CentreLayout from "../Layout";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import {
  YclaIntern,
  YclaCollab,
  YclaHelpDesk,
  YclaLegalAid,
  YclaPublications,
  YclaWorkshop,
  YclaRights,
} from "@/public/assetManager";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import CustomTitle from "@/components/docs/CustomTitle";

const DevelopmentData = [
  {
    title: "",
    desc: "Rigorous training in legal research and analysis across criminal and civil law.",
  },
  {
    title: "",
    desc: "Hands-on exposure to legal drafting, including pleadings, applications, opinions and notices in both criminal and civil matters.",
  },
  {
    title: "",
    desc: "Structured practice in moot court exercises, focusing on memorial drafting, oral advocacy and court craft.",
  },
  {
    title: "",
    desc: "Development of case analysis and litigation strategy, grounded in statutory provisions and judicial precedents.",
  },
];

const DevelopmentData1 = [
  {
    title: "",
    desc: "Capacity-building programmes for law students, legal practitioners and civil society organisations on core areas of law and practice.",
  },
  {
    title: "",
    desc: "Specialised sessions on gender justice, human rights, constitutional provisions and statutory compliance.",
  },
  {
    title: "",
    desc: "Practical sessions on legal remedies, procedural law and advocacy.",
  },
  {
    title: "",
    desc: "Engagement with practitioners and subject matter experts to bridge doctrinal law and real-world legal application.",
  },
];

const DevelopmentData2 = [
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Blogs:</span> Focus on core legal subjects,
        including statutory interpretation, constitutional developments,
        criminal and procedural law, regulatory frameworks and evolving judicial
        doctrines.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Legal Review:</span> Provides structured
        coverage of landmark judgments, doctrinal shifts and significant
        amendments, with in-depth case studies and jurisdiction or
        statute-specific legal analysis relevant for legal education and
        practice.
      </span>
    ),
  },
  {
    title: "",
    desc: (
      <span>
        <span className="font-bold">Knowledge Repository:</span> Maintains a
        free, open-access archive of bare-act explainers, case law digests,
        comparative legal notes, procedural checklists and community contributed
        legal research to support rigorous legal learning and reference.
      </span>
    ),
  },
];

const DevelopmentData3 = [
  {
    title: "",
    desc: "Conduct legal awareness outreach in colleges and community settings focusing on fundamental, statutory and procedural rights.",
  },
  {
    title: "",
    desc: "Deliver interactive, case-based sessions to build legal literacy, rights consciousness and practical understanding of remedies.",
  },
  {
    title: "",
    desc: "Simplify complex legal provisions into accessible, citizen-focused knowledge without compromising legal accuracy.",
  },
  {
    title: "",
    desc: "Encourage informed engagement with legal institutions, grievance redressal mechanisms and courts.",
  },
];

const DevelopmentData4 = [
  {
    title: "",
    desc: "Organise legal aid clinics to provide free legal assistance, counselling and preliminary legal advice.",
  },
  {
    title: "",
    desc: "Facilitate training of para legal volunteers in collaboration with NALSA/DALSA.",
  },
  {
    title: "",
    desc: "Strengthen community-level legal awareness and institutional linkage with the formal legal aid system.",
  },
];

const DevelopmentData5 = [
  {
    title: "",
    desc: "Enter into MoUs with universities and academic institutions for joint research, training, and capacity-building initiatives.",
  },
  {
    title: "",
    desc: "Develop strategic partnerships with NGOs and civil society organisations to strengthen implementation, outreach, and social impact.",
  },
  {
    title: "",
    desc: "Co-design programmes combining research, field engagement, and legal awareness.",
  },
  {
    title: "",
    desc: "Facilitate knowledge exchange through joint events, publications, and community interventions.",
  },
];

const DevelopmentData6 = [
  {
    title: "",
    desc: "Provide dedicated support for preliminary legal queries, offering accurate guidance on rights, remedies, and procedural steps.",
  },
  {
    title: "",
    desc: "Assist individuals with appropriate legal direction and referrals, without substituting formal legal representation.",
  },
  {
    title: "",
    desc: "Facilitate documentation guidance, including basic information on applications, notices, and legal formats.",
  },
  {
    title: "",
    desc: "Ensure confidential and ethical handling of queries, in line with professional legal standards.",
  },
];

const Ycla = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="ycla-div"
        className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] flex flex-col"
      >
        <div className="pt-20">
          <CustomTitle title={"YuvaCracy Centre for Legal Affairs (YCLA)"} />
          <div className="w-full text-lg">
            YCLA champions access to justice, legal aid, litigation strategy and
            legal education. We equip individuals, communities and young legal
            professionals with tools to navigate India's legal landscape. By
            blending young energy with expert guidance, we turn legal knowledge
            into real-world empowerment.
          </div>
        </div>

        <div className="w-full pt-20 text-[2.2rem] font-bold font-montserrat">
          Our Key Programs
        </div>

        <ImageTextComp1
          title={"Vidhi Internship Program"}
          subtitle={""}
          imgSrc={YclaIntern}
          customTextStyle="md:pt-12"
          desc={""}
          data={DevelopmentData}
          bullet={true}
          small={true}
        />

        <ImageTextComp1
          mirror={true}
          title={"YCLA Workshops"}
          subtitle={""}
          customTextStyle="md:pt-12"
          desc={""}
          data={DevelopmentData1}
          imgSrc={YclaWorkshop}
          bullet={true}
          small={true}
        />

        <ImageTextComp1
          title={"Publications"}
          subtitle={""}
          desc={""}
          data={DevelopmentData2}
          imgSrc={YclaPublications}
          bullet={true}
          small={true}
        />

        <ImageTextComp1
          mirror={true}
          title={"Know Your Rights Campaign"}
          subtitle={""}
          desc={""}
          data={DevelopmentData3}
          imgSrc={YclaRights}
          bullet={true}
          small={true}
          imgX="w-[25rem]"
        />

        <ImageTextComp1
          title={"Legal Aid Clinics"}
          subtitle={""}
          desc={""}
          data={DevelopmentData4}
          imgSrc={YclaLegalAid}
          bullet={true}
          small={true}
        />
        <ImageTextComp1
          mirror={true}
          title={"Collaborative Projects"}
          subtitle={""}
          desc={""}
          data={DevelopmentData5}
          imgSrc={YclaCollab}
          bullet={true}
          small={true}
          imgX="w-[30rem]"
        />
        <ImageTextComp1
          title={"Legal HelpDesk"}
          subtitle={""}
          desc={""}
          data={DevelopmentData6}
          imgSrc={YclaHelpDesk}
          bullet={true}
          small={true}
        />

        <div className="w-full pt-12 text-xl font-semibold ">
          Join our programs, access resources or partner today.
        </div>
      </div>
    </CentreLayout>
  );
};

export default Ycla;
