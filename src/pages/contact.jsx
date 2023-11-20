
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


const ContactPage = () => {
    return (
        <>
            <div className="relative z-0">
                <div>
                    <Navbar />
                </div>
                <div className="relative mt-[17vh]">
                    <Contact />
                </div>




            </div>
        </>


    );
};

export default ContactPage;




