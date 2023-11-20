import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, softskills } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
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
        <div>
            {isSmallScreen ? <motion.div
                variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
                className=" w-[45vw] h-[40vw] overflow-hidden  card-gradient p-[1px] rounded-[20px] shadow-card">
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-jetLight rounded-[20px] py-5 px-12 h-[100%] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-taupe text-[18px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div> :
                <motion.div
                    variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
                    className="sm:w-[250px] w-[50vw] hidden sm:block card-gradient p-[1px] rounded-[20px] shadow-card">
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

            }


        </div>

    );
};

const SoftSkills = () => {
    return (
        <div className="my-[6 rem] ">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubTextLight} `}>My Skills</p>
                <h2 className={`${styles.sectionHeadTextLight} `}>Soft Skills.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 self-end text-taupe text-[18px] max-w-5xl leading-[30px]  text-justify">
                With a distinctive blend of hardware and software development skills, coupled with a fervent enthusiasm for implementing Artificial Intelligence, I present a compelling profile. My professional journey underscores a strong commitment to collaboration and teamwork, yielding innovative solutions in domains like computer vision, robotics, and network protocols. Demonstrating versatility, I have proficiently utilized Flutter, Laravel, and React for crafting cross-platform applications that prioritize user-friendliness and efficiency. Beyond technical prowess, my repertoire encompasses a rich collection of soft skills, including adept communication, analytical problem-solving, effective leadership, critical thinking, and a collaborative spirit. My inherent adaptability has been instrumental in traversing diverse contexts, while my dedication to continuous learning fuels both personal growth and dynamic interactions within interdisciplinary teams.
            </motion.p>
            <div className='sm:mt-20 sm:flex sm:flex-wrap sm:gap-10 sm:justify-normal grid grid-cols-2  gap-x-[15px] gap-y-[10px] mt-10 justify-center'>

                {softskills.map((service, index) => (
                    <ServiceCard key={`div-${index}`} index={index} {...service} />
                ))}
            </div>

        </div>
    );
};

export default SectionWrapper(SoftSkills, 'softSkills');
