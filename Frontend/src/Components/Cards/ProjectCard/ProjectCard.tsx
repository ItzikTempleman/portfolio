import { Project } from "../../../models/Project";
import { asset } from "../../../utils/assets";
import "./ProjectCard.css";

type ProjectProps = {
    project: Project;
}

export function ProjectCard({ project }: ProjectProps) {
    return (
        <div className="ProjectCard">
            <img className="project-cover" src={asset(project.image)} />
            <a href={project.url} >Github link to project</a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
}
