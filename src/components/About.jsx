import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { coverPic, shaq } from '../assets';



const About = () => {
  return (
    <div className="-mt-[6rem] px-6 grid grid-cols-3 gap-20">
      <motion.div>
        <div className='bg-night w-full h-full flex items-center rounded-xl justify-center'>
          <img src={coverPic} className='w-auto' style={{ height: '90%' }} alt='Cover' />
        </div>
      </motion.div>



      <div className='col-span-2'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px] text-justify">
          I bring a unique blend of skills in hardware
          and software development, as well as a passion for Artifficial Inteligence implementation.
          With a focus on collaboration and teamwork, I have successfully
          delivered innovative solutions in computer vision, robotics, and
          network protocols. Additionally, my experience in Flutter, Laravel,
          and React for multiplatform applications demonstrates my ability
          to create user-friendly and efficient software while working in a
          team environment. I possess strong leadership, problem solving
          and adaptability skills, enabling me to effectively communicate
          and work with people from diverse backgrounds.
        </motion.p>

      </div>



    </div>
  );
};

export default SectionWrapper(About, 'about');
