import React from "react";
import data from "../../content/Experince/Experince.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import Image from "../../images/download.png";

const Experience = () => {
  return (
    <section id="3" className="bg-[#090917] md:p-14">
      <div className="grid place-items-center py-8">
        <h1 className="text-center text-white/90 text-5xl font-serif ">Experince</h1>
        <h2 className="text-center text-white/50 text-lg py-3">
          My work experience as a software engineer and working on different
          companies and projects.
        </h2>
      </div>

      <VerticalTimeline className="py-5  ">
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "rgb(16,23,37)",
            border: "1px #fff ",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid", color: "#F6A303" }}
          date="2023 Feb - 2023 Apr"
          iconStyle={{ background: "rgb(16,23,37)", color: "#fff" }}
          icon={<MdWork />}
        >
          <div className="flex gap-3 ">
            <div>
              <h1 className=" ">
                <img src={Image} alt="" className="w-20 mt-1 rounded-lg h-16" />
              </h1>
            </div>
            <div>
              <h3 className="vertical-timeline-element-title">{data.role}</h3>
              <h3 className="vertical-timeline-element-subtitle">
                {data.date}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {data.company}
              </h4>
            </div>
          </div>
          <p>{data.desc}</p>
          <div className="text-white">
            <ul className="flex text-white">
              <h2 className="text-white text-lg">{data.title}</h2>
              <li className="mt-1 px-3 flex justify-center">{data.Skills}</li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

// import styled from "styled-components";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import ExperienceCard from "../Cards/ExperienceCard";
// import { experiences } from "../../data/constants";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   padding: 40px 0px 80px 0px;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 80px 0;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;

// const TimelineSection = styled.div`
//   width: 100%;
//   max-width: 1000px;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
// `;
