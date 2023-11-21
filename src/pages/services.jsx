
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
    PersonalDevelopment,
    Services

} from '../components';
import ScreenPreLoader from '../components/preloaders/ScreenPreLoader';
import MatrixRain from '../components/preloaders/matrixLoad';
import { motion } from 'framer-motion';
import { styles } from '../styles';
const ServicesPage = () => {
    return (
        <>

            <div>
                <Navbar />

            </div>
            <div className='bg-night w-screen h-[60vh] flex flex-col items-center justify-center rounded-xl gap-[10px] mt-[11vh]'>
                <h2 className={`${styles.sectionHeadTextLight} text-center text-taupe`}>
                    "The capacity to learn is a gift, the ability to learn is a skill, the willingness to learn is a <strong className=' text-white underline'>choice</strong>."
                </h2>
                <p className={`${styles.sectionSubTextLight} `}>- Brian Herbert</p>
                <div
                    className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french  flex
            justify-center items-start p-2 mb-[20px] sm:hidden">
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                        className="w-3 h-3 rounded-full bg-taupe mb-1"
                    />
                </div>
            </div>



            <div className='z-0'>
                <div className="bg-tech bg-cover bg-center bg-no-repeat">



                </div>

                <div className="bg-about bg-cover bg-center bg-no-repeat">
                    <Services />
                </div>


                <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                    <Tech />
                </div>

                <div
                    className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
                    <div
                        className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                        <Experience />
                    </div>
                </div>

            </div>


        </>


    );
};

export default ServicesPage;




