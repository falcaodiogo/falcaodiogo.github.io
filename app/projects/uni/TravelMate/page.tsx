"use client";

import Skeleton from "../../skeleton";
import { uniProjects, Project } from "../../../data/projectData";

export default function CityConnect() {
  const project: Project = uniProjects[6];
  return <Skeleton {...project} />;
}
