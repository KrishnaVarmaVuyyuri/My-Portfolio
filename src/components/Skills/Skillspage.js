// import React from "react";
// import styled from "styled-components";
// import data from "../../content/skills/Skills.json";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// export const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;

//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// export const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 300px;
//   border: 0.1px solid;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 18px;
//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// const SkillItem = styled.div`
//   font-size: 20px;
//   font-weight: 400;

//   padding: 10px 10px;
//   display: flex;
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   flex-wrap: wrap;
//   margin-bottom: 20px;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

// const SkillImage = styled.img`
//   width: 28px;
//   height: 28px;
// `;

// const Skillspage = () => {
//   return (
//     <Container id="2" className="bg-[#090917] px-3 py-10 ">
//       <Wrapper className="py-5">
//         <Title className="text-white/90 text-5xl  font-serif font-bold">Skills</Title>
//         <Desc className="text-white/50 font-serif">
//           Here are some of my skills on which I have been working on for the
//           past 2 years.
//         </Desc>

//         <SkillsContainer className="bg-[#101725] flex    rounded-lg py-20">
//           {data &&
//             data?.skills.map((skill) => (
//               <Skill className="">
//                 <SkillItem className="text-white">
//                   <SkillImage src={skill.image} />
//                   {skill.name}
//                 </SkillItem>
//               </Skill>
//             ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Skillspage;

import React from "react";
import data from "../../content/skills/Skills.json";
import Tilt from "react-parallax-tilt";

const Skillspage = () => {
  return (

    <section
      id="2"
      className="bg-[#090917] px-3   grid place-items-center"
    >
      <div className="py-5 mt-20">
        <h2 className="text-white/90  text-5xl text-center  font-serif font-bold">Skills</h2>
        <p className="text-white/50 md:mt-5 mt-3 font-serif text-center">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="bg-[#101725] flex  md:w-[78vw] mt-5 p-20  flex-wrap md:gap-10 xl:gap-20 gap-5 justify-center    rounded-xl">
          {data &&
            data?.skills.map((skill, i) => (
             
                <div
                  className=" rounded-full md:px-8 group relative md:py-5 px-3 shadow-md shadow-white/50 border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
                  key={i}
                >
                  <div className="text-white flex items-center gap-2   p-1 rounded-2xl  ">
                    <img
                      src={skill.image}
                      className="md:w-10 md:h-10 w-5 h-5 place-items-center"
                    />

                    <span
                      class="absolute md:-top-14 -top-9   text-center -translate-x-[50%] 
                  z-20 origin-left scale-0  px-1 rounded-lg border 
                  border-gray-300 bg-white text-black py-2 text-[8px] md:text-sm w-full  font-bold
                  shadow-md transition-all  duration-300 ease-in-out 
                  group-hover:scale-100"
                    >
                      {skill.name}
                      <span></span>
                    </span>
                  </div>
                </div>
             
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skillspage;
