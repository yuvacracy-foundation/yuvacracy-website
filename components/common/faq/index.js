import React from "react";
import FaqlistComponent from "./FaqlistComponent";
import CustomTitle from "../../docs/CustomTitle";

const faqs = [
  {
    question: "What is YuvaCracy Foundation?",
    answer:
      "YuvaCracy Foundation is a non-profit organization dedicated to empowering youth through education, leadership, and civic engagement. We focus on building skills in policy, law, and dialogue to foster informed and active citizens.",
  },
  {
    question: "What are YCPR and YCLA?",
    answer: (
      <>
        <span className="mr-1 text-2xl leading-none text-textSecond">
          &#8226;
        </span>{" "}
        <span>
          <span className="font-semibold">
            YCPR (YuvaCracy Centre for Policy Research):
          </span>{" "}
          Our center offers <span className="font-semibold">NITI (Policy)</span>{" "}
          Internships, where participants dive into policy research, analysis,
          and development.
        </span>
        <br />
        <span className="mr-1 text-2xl leading-none text-textSecond">
          &#8226;
        </span>{" "}
        <span>
          <span className="font-semibold">
            YCLA (YuvaCracy Centre for Legal Affairs):
          </span>{" "}
          Our center provides <span className="font-semibold">Vidhi (Law)</span>{" "}
          Internships, focusing on legal research, advocacy, and constitutional
          studies.
        </span>
      </>
    ),
  },
  {
    question: "What are NITI and Vidhi Internships?",
    answer: (
      <>
        <span className="mr-1 text-2xl leading-none text-textSecond">
          &#8226;
        </span>{" "}
        <span>
          <span className="font-semibold">NITI Internships at YCPR:</span>{" "}
          Hands-on experience in policy formulation, research, and
          implementation on topics like governance, sustainability, and social
          justice.
        </span>
        <br />
        <span className="mr-1 text-2xl leading-none text-textSecond">
          &#8226;
        </span>{" "}
        <span>
          <span className="font-semibold">Vidhi Internships at YCLA:</span>{" "}
          Practical training in legal drafting, case analysis, and advocacy,
          emphasizing constitutional law and public interest litigation.
        </span>
        <br />
        <br />
        <span>
          Both programs are designed for students and young professionals,
          lasting 4-8 weeks with mentorship from experts.
        </span>
      </>
    ),
  },
  {
    question: "How do I apply for an internship?",
    answer:
      "Applications open all through the year. Submit your resume, a statement of purpose (300-500 words), and academic transcripts via our online application form or email. Deadlines are announced on our website/ social media handles. Check the Internships page for updates.",
  },
  {
    question: "What is the YuvaCracy Dialogues program?",
    answer:
      "YuvaCracy Dialogues is our flagship annual event, a series of panel discussions, workshops, and youth-led forums on pressing issues like democracy, policy reforms, and legal rights. It brings together students, policymakers, activists, and experts for 2-3 days of immersive dialogue.",
  },
];

const Faq = () => {
  return (
    <div
      id="faq-div"
      className=" flex flex-col md:mt-[9rem] mt-[5rem] xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] justify-center  "
    >
      <CustomTitle title={"FAQs  (Frequently asked questions)"} />
      <p className=" font-openSans text-[1.05rem] text-subheading  ">
        Everything you need to know about YuvaCracy.
      </p>
      <div className=" flex flex-col gap-[1rem] md_phone:mt-[4rem] mt-[2rem]  ">
        {faqs.map((faq, index) => (
          <FaqlistComponent key={index} data={faq} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
