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
            <motion.div variants={textVariant()} className=' mt-[6 rem] w-2/3'>
                <p className={`${styles.sectionSubText} `}>
                    Look at this project!
                </p>
                <h2 className={`${styles.sectionHeadText} `}>
                    {currentProject.name}
                </h2>

                <div className="-mt-[6 rem] ">



                    <div className='col-span-2'>
                        <motion.p
                            variants={fadeIn('', '', 0.1, 1)}
                            className="mt-4 text-taupe text-[18px]  leading-[30px] text-justify">
                            {currentProject.longDescription}
                        </motion.p>

                    </div>




                </div>
            </motion.div>
            <motion.div>
                <div className='bg-night w-full h-auto flex items-center rounded-xl justify-center self-center'>
                    <img src={currentProject.image} className='object-fill rounded-xl' alt='Cover' />
                </div>
            </motion.div>

            <motion.div variants={textVariant()} className=' mt-[6 rem] w-2/3'>
                <p className={`${styles.sectionSubText} `}>
                    My role
                </p>
                <h2 className={`${styles.sectionHeadText} `}>
                    What did I help accomplishing?
                </h2>

                <div className="-mt-[6 rem] ">



                    <div className='col-span-2'>
                        <motion.p
                            variants={fadeIn('', '', 0.1, 1)}
                            className="mt-4 text-taupe text-[18px]  leading-[30px] text-justify">
                            {currentProject.myRole}
                        </motion.p>

                    </div>




                </div>
            </motion.div>


        </div>


    );
};

export default SectionWrapper(SingleViewProject, 'single-project');
