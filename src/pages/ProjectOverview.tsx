import { useParams } from "react-router-dom";
import { projectsData } from "../constants/data";

const ProjectOverview = () => {
  const { slug } = useParams();
  console.log("Slug: ", slug);

  const project = projectsData.find((proj) => proj.slug === slug);
  console.log(project);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return <div>ProjectOverview</div>;
};

export default ProjectOverview;
