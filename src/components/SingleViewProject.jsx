import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant, fadeIn } from '../utils/motion';
import { useLocation } from 'react-router-dom';



function SingleViewProject() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const currentProject = projects.find((p) => p.id === id);


    return (
        <div className='flex gap-10 flex-col'>
            <div variants={textVariant()} className=' mt-[6 rem] sm:w-4/5'>
                <motion.p variants={fadeIn('', '', 0.1, 1)} className={`${styles.sectionSubText} `}>
                    Look at this project!
                </motion.p>
                <motion.h2 variants={fadeIn('', '', 0.1, 1)} className={`${styles.sectionHeadText} `}>
                    {currentProject.name}
                </motion.h2>

                <div className="-mt-[6 rem] ">



                    <div className='col-span-2'>
                        <p
                            variants={fadeIn('', '', 0.1, 1)}
                            className="mt-4 text-taupe text-[18px]  leading-[30px] text-justify">
                            {currentProject.longDescription}
                        </p>

                    </div>




                </div>
            </div>
            <motion.div>
                <div className='bg-night  w-[87vw] h-auto flex items-center rounded-xl justify-center self-center'>
                    <img src={currentProject.image} className='object-fill rounded-xl my-[20px]' alt='Cover' />
                </div>
            </motion.div>

            <div variants={textVariant()} className=' mt-[6 rem] sm:w-4/5'>
                <motion.p variants={fadeIn('', '', 0.1, 1)} className={`${styles.sectionSubText} `}>
                    My role
                </motion.p>
                <motion.h2 className={`${styles.sectionHeadText} `}>
                    What did I help accomplish?
                </motion.h2>

                <div className="-mt-[6 rem] ">




                    <p
                        variants={fadeIn('', '', 0.1, 1)}
                        className="mt-4 text-taupe text-[18px]  leading-[30px] text-justify">
                        {currentProject.myRole}
                    </p>






                </div>
            </div>


        </div>


    );
};

export default SectionWrapper(SingleViewProject, 'single-project');
