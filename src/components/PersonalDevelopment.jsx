import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { send, sendHover } from '../assets';

const PersonalDevelopment = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // sign up on emailjs.com (select the gmail service and connect your account).
        //click on create a new template then click on save.
        emailjs
            .send(
                'service_gwnipwd', // paste your ServiceID here (you'll get one when your service is created).
                'template_buvrz6a', // paste your TemplateID here (you'll find it under email templates).
                {
                    from_name: form.name,
                    to_name: 'Juan Arango',
                    from_email: form.email,
                    to_email: 'jp15912@outlook.com',
                    message: form.message,
                },
                'dWj78JXLNerp1fRQ4' //paste your Public Key here. You'll get it in your profile section.
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you. I will get back to you as soon as possible.');

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <div
            className="-mt-[6 rem] px-6">



            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Skills</p>
                <h2 className={styles.sectionHeadTextLight}>Services.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px]">
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
    );
};

export default SectionWrapper(PersonalDevelopment, 'p-development');
