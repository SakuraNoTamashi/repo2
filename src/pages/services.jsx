
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


const ServicesPage = () => {
    return (
        <>
            <div className="relative z-0">
                <div>
                    <Navbar />
                    <div className="bg-about bg-cover bg-center bg-no-repeat">
                        <Services />
                    </div>
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




