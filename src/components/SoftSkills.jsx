import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, softskills } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const SoftSkills = () => {
    return (
        <div className="-mt-[6 rem] ">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubTextLight} `}>My Skills</p>
                <h2 className={`${styles.sectionHeadTextLight} `}>Soft Skills.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 self-end text-taupe text-[18px] max-w-5xl leading-[30px]  text-justify">
                With a distinctive blend of hardware and software development skills, coupled with a fervent enthusiasm for implementing Artificial Intelligence, I present a compelling profile. My professional journey underscores a strong commitment to collaboration and teamwork, yielding innovative solutions in domains like computer vision, robotics, and network protocols. Demonstrating versatility, I have proficiently utilized Flutter, Laravel, and React for crafting cross-platform applications that prioritize user-friendliness and efficiency. Beyond technical prowess, my repertoire encompasses a rich collection of soft skills, including adept communication, analytical problem-solving, effective leadership, critical thinking, and a collaborative spirit. My inherent adaptability has been instrumental in traversing diverse contexts, while my dedication to continuous learning fuels both personal growth and dynamic interactions within interdisciplinary teams.
            </motion.p>


            <div className="mt-20 flex flex-wrap gap-10">
                {softskills.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>


        </div>
    );
};

export default SectionWrapper(SoftSkills, 'softSkills');
