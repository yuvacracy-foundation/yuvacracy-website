"use client";
import React from "react";
import SupportLayout from "../Layout";
import { DonateImg2, DonateUs } from "@/public/assetManager";
import { BsBarChartLine } from "react-icons/bs";
import Image from "next/image";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import { TbPointFilled } from "react-icons/tb";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import SubHead from "@/components/common/SubHeadings/SubHead";

const data = [
  {
    desc: "Every program we run whether it's a research project, legal awareness workshop, policy internship, training session, or community outreach initiative, is made possible solely through our own efforts and personal commitment. We have been sustaining this work independently, without external funding",
  },
  {
    desc: "If you believe in what we do and wish to contribute voluntarily, no matter how big or small the amount, your support would mean a lot. Every contribution helps us continue and expand our impact.",
  },
];

const donateHelpsUsPoints = [
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          <b>Educate and empower future legal professionals</b> through YCLA
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          <b>Train young changemakers in policy and governance</b> via YCPR
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Offer <b>free legal literacy programs</b> to students and communities
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex flex-row">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Provide <b>internships, research fellowships</b>, and{" "}
          <b>skill-building opportunities</b>
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Expand our impact as a growing platform for{" "}
          <b>legal and civic advocacy</b>
        </span>
      </div>
    ),
  },
];

const Donate = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20 flex flex-col">
        <ImageTextComp1
          title={
            "Invest in India’s Legal and Policy Future. Donate to YuvaCracy"
          }
          subtitle={"Support Us"}
          desc={
            <>
              Every program we run whether it's a{" "}
              <b>research project, legal awareness workshop, </b>a{" "}
              <b>policy training fellowship, </b>or a{" "}
              <b>community outreach project</b> is powered by the commitment of
              people like you.
            </>
          }
          imgSrc={DonateUs}
          data={donateHelpsUsPoints}
        />

        {/* Why donate to YuvaCracy Section */}
        <SubHead
          title={"Why Donate to YuvaCracy?"}
          subtitle={
            <span>
              <b>Registered Section 8 Non-Profit</b> (under Companies Act, 2013)
              Recognized by <b>MCA</b>, <b>MSME</b>, and{" "}
              <b>NGO Darpan (NITI Aayog)</b>
              <b>ISO 9001:2015 Certified</b> for quality and transparency 100%
              of your contribution goes toward youth-centred programs and
              outreach.
            </span>
          }
        />

        <div className="flex flex-col md:flex-row items-center md:h-[42rem] mt-[6rem] md:mt-[12rem]">
          {/* Image Section */}
          <Image
            alt="YuvaCracy is a foundation for youth"
            className="w-full md:w-[50%] h-[20rem] md:h-[42rem] object-cover"
            src={DonateImg2}
          />

          {/* Donation Info Section */}
          <div className="bg-primary overflow-y-auto text-white w-full md:w-[50%] h-full flex flex-col justify-center px-6 py-10 md:px-12 md:py-14">
            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-wide font-montserrat md:text-4xl">
              Call for Donations!
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-[#E0E0E0] font-montserrat text-sm md:text-base leading-relaxed">
              <p>
                Every program we run — whether it’s a <b>research project</b>,{" "}
                <b>legal awareness workshop</b>, <b>policy internship</b>,
                training session, or <b>community outreach initiative</b> — is
                made possible solely through our own efforts and personal
                commitment. We have been sustaining this work independently,
                without external funding.
              </p>

              <p>
                If you believe in what we do and wish to contribute voluntarily,
                no matter how big or small the amount, your support would mean a
                lot. Every contribution helps us continue and expand our impact.
              </p>
            </div>

            {/* Donation Details Box */}
            <div className="h-full p-4 mt-8 text-sm border rounded-sm border-white/60 md:p-6 font-montserrat md:text-base">
              <h3 className="mb-4 font-bold tracking-wide text-white">
                DETAILS FOR DONATION
              </h3>

              <div className="space-y-2 text-[#E0E0E0]">
                <p>
                  <span className="font-semibold text-white">
                    A/c Holder Name:
                  </span>{" "}
                  YUVACRACY FOUNDATION
                </p>
                <p>
                  <span className="font-semibold text-white">Bank:</span> State
                  Bank of India
                </p>
                <p>
                  <span className="font-semibold text-white">Account No:</span>{" "}
                  40631194535
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-xs md:text-sm text-[#CFCFCF] font-montserrat">
              <p>
                For any query, contact{" "}
                <span className="font-semibold text-white">
                  Shivashish Narayan
                </span>
              </p>
              <p className="underline">shivashish.yuvacracy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
};

export default Donate;
