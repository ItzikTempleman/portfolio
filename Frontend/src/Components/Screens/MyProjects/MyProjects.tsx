import { useEffect, useState } from "react";

import { ProjectCard } from "../../Cards/ProjectCard/ProjectCard";
import "./MyProjects.css";
import { Project } from "../../../models/Project";
import { projectList } from "../../../utils/ProjectsList";

export function MyProjects() {


    const [list, setProjects] = useState<Project[]>(projectList.projects);
    useEffect(() => {
 //localStorage.clear();
        const saved = localStorage.getItem("list");
        if (saved) {
            const parsed = JSON.parse(saved) as Project[];
            if (parsed.length > 0) {
                setProjects(parsed);
            }
        }
    }, []);

    useEffect(() => {
        if (list) {

            localStorage.setItem("list", JSON.stringify(list));
        }
    }, [list]);

    return (
        <div className="MyProjects">
            <h2>Projects</h2>
            <div className="cards">
                {
                    list.map(item =>
                        <ProjectCard key={item.id} project={item} />
                    )
                }
            </div>
        </div>
    );
}
