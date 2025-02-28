import styles from './projectscard.module.css'
import { FaFreeCodeCamp } from "react-icons/fa"
interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
    return (
        
            <div className={styles.projectcard}>
                <section>
                    <h1><FaFreeCodeCamp /></h1>
                    <img src={imageUrl} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </section>
                <section>
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
                </section>
            </div>
    )
}

export default ProjectCard