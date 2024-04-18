
import { Preload } from '@react-three/drei';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
    PersonalDevelopment,
    SoftSkills

} from '../components';
import { softskills } from '../constants';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { styles } from '../styles';

import { fadeIn, textVariant } from '../utils/motion';


const Landing = () => {
    return (
        <>
            <div className='z-[9]  h-[500px] w-[500px] right-[0px] bottom-[0px]  fixed'>
                {/* Otro contenido de tu componente si lo hay */}
                 <iframe
                    title="Tu Título"
                    src="https://copilotstudio.microsoft.com/environments/Default-c254eece-964c-40d3-81bd-d74656c087fd/bots/crf8f_copilotoPruebasBeTic/webchat?__version__=2"
                    frameBorder="0"
                 
                    style={{ width: '100%', height: '100%' }}
                ></iframe> 
            </div>
            <div className="relative z-0">
                <div>
                    <Navbar />
                    <Hero isProfessionalView={false} />
                </div>

                <div className="bg-about bg-cover bg-center bg-no-repeat">
                    <About />
                </div>
                <div className="relative z-0 ">
                    <SoftSkills />


                </div>







            </div>
        </>


    );
};

export default Landing;





/*  <div className="relative z-0">
                <div>
                    <Navbar />
                    <Hero />
                </div>

                <div className="bg-about bg-cover bg-center bg-no-repeat">
                    <About />
                </div>

                <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                    <Tech />
                </div>

                <Projects />

                <div
                    className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
                    <div
                        className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                        <Experience />
                    </div>
                </div>
                <div className="relative z-0">
                    <Contact />
                </div>
            </div>*/