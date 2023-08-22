
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
    PersonalDevelopment

} from '../components';


const ProjectsPage = () => {
    return (
        <>
            <div className="relative z-0">
                <div>
                    <Navbar />

                </div>

                <div className="z-index:0">
                    <Projects />
                </div>
            </div>
        </>


    );
};

export default ProjectsPage;



