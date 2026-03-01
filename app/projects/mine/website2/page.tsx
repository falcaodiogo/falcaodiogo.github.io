"use client";

import Skeleton from "../../skeleton";
import { personalProjects, Project } from "../../../data/projectData";

export default function CityConnect() {
  const project: Project = personalProjects[2];
  return <Skeleton {...project} />;
}
