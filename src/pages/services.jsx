
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


const ServicesPage = () => {
    return (
        <>

            <div>
                <Navbar />

            </div>



            <div className='z-0'>
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




