import React from "react";
import CustomTitle from "@/components/docs/CustomTitle";
import Image from "next/image";

const BulletRow = ({ children }) => (
  <div className="flex items-start gap-3">
    <span className="-mt-1 text-4xl leading-none text-textSecond">&#8226;</span>
    <p className="text-lg text-textSecond">{children}</p>
  </div>
);

const ImageTextComp1 = ({
  title,
  subtitle,
  desc,
  imgSrc,
  data,
  customTextStyle = "",
  customTextStylePoints = "",
  mirror = false,
  small = false,
  bullet = false,
  imgX = "w-[36rem]",
  imgY = "",
}) => {
  return (
    <div className="flex flex-col items-center pt-20 pb-4 md:pb-12 md:flex-row sm:my-3">
      {mirror ? (
        <div className="w-full md:flex">
          <div className="md:w-[50%] w-full flex md:mr-4 md:justify-start order-2 md:order-none">
            <div className="my-auto overflow-hidden rounded-xl">
              <Image
                alt="YuvaCracy is a foundation for Youth"
                className={`${imgX} ${imgY} object-cover`}
                src={imgSrc}
              />
            </div>
          </div>

          <div
            className={`flex flex-col md:w-[50%] w-full order-1 md:order-none md:ml-4 ${customTextStyle} mt-6 md:mt-0`}
          >
            <CustomTitle title={title} subtitle={subtitle} small={small} />
            {desc && <p className="text-lg text-textSecond">{desc}</p>}

            {data && (
              <div className={`flex flex-col gap-3 ${customTextStylePoints}`}>
                {data.map((item, ind) => (
                  <div key={ind}>
                    {item.title && (
                      <p className="text-lg font-bold">{item.title}</p>
                    )}
                    {bullet ? (
                      <BulletRow>{item.desc}</BulletRow>
                    ) : (
                      <p className="text-lg text-textSecond">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full md:flex">
          <div
            className={`flex flex-col md:w-[50%] w-full order-1 md:order-none md:mr-4 ${customTextStyle}`}
          >
            <CustomTitle title={title} subtitle={subtitle} small={small} />
            {desc && <p className="text-lg text-textSecond">{desc}</p>}

            {data && (
              <div className={`flex flex-col gap-3 ${customTextStylePoints}`}>
                {data.map((item, ind) => (
                  <div key={ind}>
                    {item.title && (
                      <p className="text-lg font-bold">{item.title}</p>
                    )}
                    {bullet ? (
                      <BulletRow>{item.desc}</BulletRow>
                    ) : (
                      <p className="text-lg text-textSecond">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:w-[50%] w-full flex md:justify-end justify-center order-2 items-start md:order-none">
            <div className="my-auto overflow-hidden md:ml-4 rounded-xl ">
              <Image
                alt="YuvaCracy is a foundation for Youth"
                className="md:w-[28rem] object-contain"
                src={imgSrc}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageTextComp1;
