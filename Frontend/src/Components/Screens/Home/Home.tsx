import { useEffect, useState } from "react";
import { ProjectCard } from "../../Cards/ProjectCard/ProjectCard";
import "./Home.css";
import { Project } from "../../../models/Project";
import { projectList } from "../../../utils/ProjectsList";

export function Home() {

    const [list, setProjects] = useState<Project[]>(projectList.projects);

    useEffect(
        () => {
            localStorage.clear();

            const saved = localStorage.getItem("list");
            if (saved) {
                const parsed = JSON.parse(saved) as Project[];
                if (parsed.length > 0) {
                    setProjects(parsed);
                }
            }
        }, []
    );

    useEffect(
        () => {
            if (list) {
                localStorage.setItem("list", JSON.stringify(list));
            }
        }, [list]
    );

    return (
        
        <div className="Home">
            <h1>Portfolio</h1>
            {
                list.map(item =>
                    <ProjectCard key={item.id} project={item} />
                )
            }
        </div>
    );
}
