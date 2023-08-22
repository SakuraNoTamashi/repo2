import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useLocation } from 'react-router-dom';
import { BallCanvas } from './canvas';

const ServiceCard = ({ index, tag, tagName }) => {

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
                <img src={tag} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {tagName}
                </h3>
            </div>
        </motion.div>
    );
};

const SingleViewProjectTech = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const currentProject = projects.find((p) => p.id === id);

    return (
        <div className="-mt-[6 rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubTextLight}>What did I use?</p>
                <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
            </motion.div>


            <div className="flex flex-wrap justify-center gap-10 mt-14">
                {currentProject.tags.map((tag, index) => (
                    <div className="w-28 h-28" key={`ball-${index}`}>
                        <BallCanvas icon={tag.tag} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default SectionWrapper(SingleViewProjectTech, 'SingleViewProjectTech');
