
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
            {/* <div className='z-[9]  h-[600px] w-[600px] right-[0px] bottom-[0px]  fixed'>
    
                 <iframe
                    title="Tu Título"
                    src="https://web.powerva.microsoft.com/environments/0654d8a3-5812-e86c-8102-16bf26fbb319/bots/cre7a_prueba/webchat?_version_=2"
                    frameBorder="0"
                 
                    style={{ width: '100%', height: '100%' }}
                ></iframe> 
            </div> */}
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