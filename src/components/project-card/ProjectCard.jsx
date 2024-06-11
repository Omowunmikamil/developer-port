import wunmi from './ProjectCard.module.css';

const ProjectCard = ({img, title, tagOne, tagTwo, tagThree}) => {
    return (
        <div className={wunmi.projectCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className={wunmi.tags}>
                <p>{tagOne}</p>
                <p>{tagTwo}</p>
                <p>{tagThree}</p>
            </div>
        </div>
    );
};

export default ProjectCard;