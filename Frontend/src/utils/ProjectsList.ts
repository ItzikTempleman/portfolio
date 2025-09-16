import { Project } from "../models/Project";

class ProjectList {

    public projects: Project[] = [
        new Project(
            1,
            "Vacations",
            "Vacations management website with a fullstack system with front " +
            "and backend\n - admins can manage ta vacation fully" +
            "(add, edit, remove and view like charts per destination by users)\n" +
            "while regular users can view and like or unlike vacations)",
            "/assets/vacations-site-image.png",
            "https://github.com/ItzikTempleman/vacations"
        ),
        new Project(
            2,
            "Weather and forecast",
            "An intuitive weather website that shows city temperatures in israel locally",
            "/assets/weather-site-image.png",
            "https://github.com/ItzikTempleman/WeatherForecast"
        ),
        new Project(
            3,
            "Krypto-King",
            "A crypto currency website to compare prices of currencies intuitively with a chart",
            "/assets/crypto.png",
            "https://github.com/ItzikTempleman/Crypto"
        ),
    ];
}

export const projectList = new ProjectList();