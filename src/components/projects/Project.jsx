import { projectData } from '../../../data';
import Button from '../../layout/button/Button';
import ProjectCard from '../project-card/ProjectCard';
import wunmi from './Project.module.css'

const Project = () => {
    return (
    <section className={wunmi.project_container}>
        {/* Your code here */}
        <div className={wunmi.project_heading}>
            <h2>Projects</h2>
            <Button text={'Contact Me'} />
        </div>
        <div className={wunmi.project_card}>
        {
            projectData.map((item, index) => {
                return (
                    <ProjectCard 
                        img={item.img} 
                        tagOne={item.tagOne}
                        tagThree={item.tagThree}
                        tagTwo={item.tagTwo} 
                        title={item.title} 
                        key={index}
                    />
                )
            })
        }
        </div>
    </section>
    );
};

export default Project;