import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const ProjectCard = ({
  id,
  name,
  description,
  image,

  index,
  active,
  handleClick,
  smallScreen,
  tags,
}) => {

  const history = useNavigate();

  const showProject = (id) => {

    history(`/project?id=${id}`);
  };
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
      className={`relative ${smallScreen ? ('lg:flex-[3.5] flex-[10]') : (active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]')
        } flex items-center justify-center sm:min-w-[170px] md:max-w-[90%] xl:max-w-[100%] w-[95vw]
      h-[420px] cursor-pointer card-shadow`}
      onHoverStart={() => handleClick(id)}
      onClick={() => showProject(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full contain object-center rounded-[24px]"
      />

      {active !== id ? (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-10 h-3/6 sm:h-2/6 overflow-hidden">
            <h2
              className="font-bold sm:text-[28px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>

            <div className='absolute grid sm:grid-cols-7 grid-cols-11 gap-3 md:gap-x-[25px] mt-2 bottom-2 max-w-full overflow-hidden w-[95%] max-h-[30%] '>
              {tags.map((tag) => (
                <div
                  // onClick={() => window.open(repo, '_blank')}
                  className="bg-[rgba(20,20,20,0.2)] sm:w-11 sm:h-11 w-15 h-15 rounded-md 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] overflow-hidden">
                  <img
                    src={tag.tag}

                    className="sm:w-4/5 sm:h-4/5  object-contain"
                  />
                </div>
              ))}



            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-10 h-3/5 overflow-hidden">


            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px] overflow-hidden">
              {description}
            </p>
            {/* <div className='absolute grid grid-cols-10 gap-3 mt-2 bottom-2 max-w-full h-1/5 overflow-hidden'>
              {tags.map((tag) => (
                <div
                  // onClick={() => window.open(repo, '_blank')}
                  className=" bg-night sm:w-11 sm:h-11 w-15 h-15 rounded-md 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] overflow-hidden">
                  <img
                    src={tag.tag}

                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              ))}



            </div> */}
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

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Detect screen size here and update isSmallScreen accordingly
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the screen width threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-[6rem] ">
      <div className={`${styles.padding}  mx-auto relative z-0 `}>
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
        <div className="mt-[50px]  sm:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col sm:min-h-[100vh]  min-h-[200vh] h-max gap-5 mb-5 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              smallScreen={isSmallScreen}
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