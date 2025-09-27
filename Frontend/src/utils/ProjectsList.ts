import { Project } from "../models/Project";
import { asset } from "../utils/asset";

class ProjectList {
  public projects: Project[] = [
    new Project(
      1,
      "Vacations",
      "Vacations management website…",
      asset("assets/images/vacations-site-image.png"),
      "https://github.com/ItzikTempleman/vacations"
    ),
    new Project(
      2,
      "Weather and forecast",
      "An intuitive weather website…",
      asset("assets/images/weather-site-image.png"),
      "https://github.com/ItzikTempleman/WeatherForecast"
    ),
    // …
  ];
}

export const projectList = new ProjectList();