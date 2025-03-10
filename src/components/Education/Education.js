import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import data from "../../content/Education/Education.json";

const Education = () => {
  return (
    <section id="5" className="bg-[#090917] py-14 px-3">
      <div  className="grid justify-center py-8 mt-3">
        <h1 className="text-center text-white/90 text-5xl font-serif font-bold">Education</h1>
        <h2 className="text-center text-white/50 md:text-xl text-md font-serif py-3  ">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </h2>
      </div>
      <VerticalTimeline className="">
        {data &&
          data?.list.map((d,i) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(16,23,37)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(16,23,37)" }}
              date={d.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "" }}
              icon={<IoSchool />}
              key={i}
            >
              <h3 className="vertical-timeline-element-title">{d.school}</h3>
              <h3 className="vertical-timeline-element-title">{d.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{d.date}</h4>
              <p>{d.desc}</p>
            </VerticalTimelineElement>
          ))}
        {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement> */}
      </VerticalTimeline>
    </section>
  );
};
export default Education;
