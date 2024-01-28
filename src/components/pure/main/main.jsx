import AboutMe from "./aboutMe/aboutMe";
import AcademicTraining from "./academicTraining/academicTraining";
import MoreAboutMe from "./moreAboutMe/moreAboutMe";
import ProfessionalExperience from "./professionalExperience/professionalExperience";
import Skills from "./skills/skills";
import Contact from './contact/contact';

const Main = () => {
   
    return (
        <div className='main__container'>
            <AboutMe></AboutMe>
            <MoreAboutMe></MoreAboutMe>
            <Skills></Skills>
            <AcademicTraining></AcademicTraining>
            <ProfessionalExperience></ProfessionalExperience>
            <Contact></Contact>
        </div>
    );
}

export default Main;
