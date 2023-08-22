
import { useParams, useLocation } from 'react-router-dom';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
    PersonalDevelopment,
    Services,
    SingleViewProjectTech, SingleViewProject

} from '../components';
import { projects } from '../constants';



const ProjectPage = () => {

    return (
        <>
            <div className="relative z-0">
                <div>
                    <Navbar />

                </div>
                <div className="bg-about bg-cover bg-center bg-no-repeat ">
                    <SingleViewProject />
                </div>
                <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                    <SingleViewProjectTech />
                </div>

            </div>
        </>
    );
};

export default ProjectPage;




