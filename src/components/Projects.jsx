import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCard2 = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,

}) => {
  return (
    <motion.div
      className={`relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={false}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${id % 2 === 0 ? "right-0" : "left-0"}`}
          priority={true}
        />
        <div
          className={`absolute top-0 text-[#0E1016] ${id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"} mt-6 flex  items-center justify-center gap-4 lg:mt-10`}>
          {available ? (
            <>
              <Link
                href={github}
                target="_blank"
                aria-label="Open GitHub Repository"
                className="rounded-full w-[20px] bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="35"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false">
                <SiGithub />
              </Link>
              <Link
                href={demo}
                target="_blank"
                aria-label="Open Live Demo"
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="35"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="false">
                <BsLink45Deg />
              </Link>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div
          className={`absolute text-white  ${!(id % 2 === 0)
            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4"
            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
            } mb-10  md:mb-16 lg:mb-14 `}>
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
            }
          />
          <div className="mt-9 mb-9 grid grid-cols-5 gap-5">
            {technologies.map((IconComponent, id) => (
              <div key={id} className={"relative"}>
                <Link
                  href={techLinks[id]}
                  target="_blank"
                  aria-label={`Learn more about ${techNames[id]}`}
                  className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                  title={techLinks[id]}
                  data-blobity-tooltip={techNames[id]}
                  data-blobity-magnetic="false"
                >
                  <IconComponent />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};


const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full contain object-center rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute right-0 z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            {/* <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button> */}
          </div>
        </>
      )}
    </motion.div>
  );
};


const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="mt-[6rem] ">
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Case Studies</p>
          <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            These projects demonstrate my expertise with practical examples of
            some of my work, including brief descriptions and links to code
            repositories and live demos. They showcase my ability to tackle
            intricate challenges, adapt to various technologies, and efficiently
            oversee projects.
          </motion.p>
        </div>


      </div>


      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] grid  grid-cols-2  min-h-[70vh] gap-5 mb-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;






// return (
//   <motion.div
//     variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//     className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
//       } flex items-center justify-center min-w-[170px] 
//       h-[420px] cursor-pointer card-shadow`}
//     onClick={() => handleClick(id)}>
//     <div
//       className="absolute top-0 left-0 z-10 bg-jetLight 
//       h-full w-full opacity-[0.5] rounded-[24px]"></div>

//     <img
//       src={image}
//       alt={name}
//       className="absolute w-full h-full object-cover rounded-[24px]"
//     />

//     {active !== id ? (
//       <div className="flex items-center justify-start pr-[4.5rem]">
//         <h3
//           className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
//         whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
//         absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
//         leading-none z-20">
//           {name}
//         </h3>
//       </div>
//     ) : (
//       <>
//         <div
//           className="absolute bottom-0 p-8 justify-start w-full 
//             flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
//           <div className="absolute inset-0 flex justify-end m-3">
//             <div
//               onClick={() => window.open(repo, '_blank')}
//               className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
//                   flex justify-center items-center cursor-pointer
//                   sm:opacity-[0.9] opacity-[0.8]">
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-4/5 h-4/5 object-contain"
//               />
//             </div>
//           </div>

//           <h2
//             className="font-bold sm:text-[32px] text-[24px] 
//               text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
//             {name}
//           </h2>
//           <p
//             className="text-silver sm:text-[14px] text-[12px] 
//               max-w-3xl sm:leading-[24px] leading-[18px]
//               font-poppins tracking-[1px]">
//             {description}
//           </p>
//           <button
//             className="live-demo flex justify-between 
//               sm:text-[16px] text-[14px] text-timberWolf 
//               font-bold font-beckman items-center py-5 pl-2 pr-3 
//               whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
//               w-[125px] h-[46px] rounded-[10px] glassmorphism 
//               sm:mt-[22px] mt-[16px] hover:bg-battleGray 
//               hover:text-eerieBlack transition duration-[0.2s] 
//               ease-in-out"
//             onClick={() => window.open(demo, '_blank')}
//             onMouseOver={() => {
//               document
//                 .querySelector('.btn-icon')
//                 .setAttribute('src', pineappleHover);
//             }}
//             onMouseOut={() => {
//               document
//                 .querySelector('.btn-icon')
//                 .setAttribute('src', pineapple);
//             }}>
//             <img
//               src={pineapple}
//               alt="pineapple"
//               className="btn-icon sm:w-[34px] sm:h-[34px] 
//                   w-[30px] h-[30px] object-contain"
//             />
//             LIVE DEMO
//           </button>
//         </div>
//       </>
//     )}
//   </motion.div>
// );
// };






// const ProjectCard = ({
//   id,
//   name,
//   description,
//   image,
//   repo,
//   demo,
//   index,
//   active,
//   handleClick,
//   hasRepo,
//   hasDemo,
//   isPhone,
// }) => {
//   return (
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className={`relative lg:${isPhone ? 'lg:flex-[0.5] flex-[2]' : 'lg:flex-[3.5] flex-[10]'
//         }
//          flex items-center justify-center min-w-[170px] 
//       h-[420px] cursor-pointer card-shadow`}
//       onClick={() => handleClick(id)}>


//       <img
//         src={image}
//         alt={name}
//         className="absolute w-full top-0 h-2/4 cover rounded-[25px]"
//       />

//       {isPhone ? (
//         <div className="flex items-center justify-start pr-[4.5rem]">
//           <h3
//             className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
//         whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
//         absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
//         leading-none z-20">
//             {name}
//           </h3>
//         </div>
//       ) : (
//         <>
//           <div
//             className="absolute bottom-0 p-8 justify-start w-full 
//             flex-col bg-[rgb(203,203,203)] rounded-b-[24px] z-0 h-3/5">
//             {hasRepo ? <div className="absolute inset-0 flex justify-end m-3">
//               <div
//                 onClick={() => window.open(repo, '_blank')}
//                 className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
//                   flex justify-center items-center cursor-pointer
//                   sm:opacity-[0.9] opacity-[0.8]">
//                 <img
//                   src={github}
//                   alt="source code"
//                   className="w-4/5 h-4/5 object-contain"
//                 />
//               </div>
//             </div> : null}

//             <h2
//               className="font-bold sm:text-[32px] text-[24px] 
//               text-black uppercase font-beckman sm:mt-0 -mt-[1rem]">
//               {name}
//             </h2>
//             <p
//               className="text-black sm:text-[14px] text-[12px] 
//               max-w-3xl sm:leading-[24px] leading-[18px]
//               font-poppins tracking-[1px]">
//               {description}
//             </p>
//             <button
//               className=" absolute bottom-5 live-demo flex justify-between 
//               sm:text-[16px] text-[14px] text-timberWolf 
//               font-bold font-beckman items-center py-5 pl-2 pr-3 
//               whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
//               w-[125px] h-[46px] rounded-[10px] glassmorphism 
//               sm:mt-[22px] mt-[16px] hover:bg-battleGray 
//               hover:text-eerieBlack transition duration-[0.2s] 
//               ease-in-out"
//               onClick={() => window.open(demo, '_blank')}
//               onMouseOver={() => {
//                 document
//                   .querySelector('.btn-icon')
//                   .setAttribute('src', pineappleHover);
//               }}
//               onMouseOut={() => {
//                 document
//                   .querySelector('.btn-icon')
//                   .setAttribute('src', pineapple);
//               }}>
//               <img
//                 src={pineapple}
//                 alt="pineapple"
//                 className=" btn-icon sm:w-[34px] sm:h-[34px] 
//                   w-[30px] h-[30px] object-contain"
//               />
//               LIVE DEMO
//             </button>
//           </div>
//         </>
//       )}
//     </motion.div>
//   );
// };