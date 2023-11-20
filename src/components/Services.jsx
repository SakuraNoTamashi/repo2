import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
            className=" sm:w-[250px] sm:h-min w-[40vw] h-[40vw] overflow-hidden card-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 sm:min-h-[280px] h-full flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <div className="-mt-[6 rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Skills</p>
                <h2 className={styles.sectionHeadText}>Services.</h2>
            </motion.div>


            <div className="sm:mt-20 sm:flex sm:flex-wrap sm:gap-10 sm:justify-normal grid grid-cols-2  gap-x-[15px] gap-y-[10px] mt-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </div>
    );
};

export default SectionWrapper(Services, 'myServices');
