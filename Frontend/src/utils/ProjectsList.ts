import { Project } from "../models/Project";
const BASE = import.meta.env.BASE_URL;
class ProjectList {

    public projects: Project[] = [
        new Project(
            1,
            "Vacations",
            "Vacations management website with a fullstack system with front " +
            "and backend\n - admins can manage ta vacation fully" +
            "(add, edit, remove and view like charts per destination by users)\n" +
            "while regular users can view and like or unlike vacations)",
          `${BASE}assets/images/vacations-site-image.png`,
            "https://github.com/ItzikTempleman/vacations"
        ),
        new Project(
            2,
            "Weather and forecast",
            "An intuitive weather website that shows city temperatures in israel locally",
           `${BASE}assets/images/weather-site-image.png`,
            "https://github.com/ItzikTempleman/WeatherForecast"
        ),
        new Project(
            3,
            "Krypto-King",
            "A crypto currency website to compare prices of currencies intuitively with a chart",
           `${BASE}assets/images/crypto.png`,
            "https://github.com/ItzikTempleman/Crypto"
        ),
        new Project(
            4,
            "Notes",
            "A nicely organized note tracking app with functionalities of saving, editing and deleting and font changing. Enjoy",
            `${BASE}assets/images/notes.png`,
            "https://github.com/ItzikTempleman/note-tracker"
        ),
    ];
}

export const projectList = new ProjectList();