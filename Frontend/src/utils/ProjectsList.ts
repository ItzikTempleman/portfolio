import { Project } from "../models/Project";
import { asset } from "../utils/asset";

class ProjectList {

    public projects: Project[] = [
        new Project(
            1,
            "AI recipe generator",
            "generates recipes from a prompt precisely and beautifully. supports all languages"+
             "api key available upon request only (it costs me money)",
            asset("assets/images/recipes.png"),
            "https://github.com/ItzikTempleman/Ai-Recipes"
        ),
        new Project(
            2,
            "Vacations",
            "Vacations management website with a fullstack system with front " +
            "and backend\n - admins can manage ta vacation fully" +
            "(add, edit, remove and view like charts per destination by users)\n" +
            "while regular users can view and like or unlike vacations)",
            asset("assets/images/vacations-site-image.png"),
            "https://github.com/ItzikTempleman/vacations"
        ),
        new Project(
            3,
            "Weather and forecast",
            "An intuitive weather website that shows city temperatures in israel locally",
            asset("assets/images/weather-site-image.png"),
            "https://github.com/ItzikTempleman/WeatherForecast"
        ),
        new Project(
            4,
            "Krypto-King",
            "A crypto currency website to compare prices of currencies intuitively with a chart",
            asset("assets/images/crypto.png"),
            "https://github.com/ItzikTempleman/Crypto"
        ),
        new Project(
            5,
            "Notes",
            "A nicely organized note tracking app with functionalities of saving, editing and deleting and font changing. Enjoy",
            asset("assets/images/notes.png"),
            "https://github.com/ItzikTempleman/note-tracker"
        ),
    ];
}

export const projectList = new ProjectList();