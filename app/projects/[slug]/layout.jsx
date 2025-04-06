import projectsData from "@/data/projects.json";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Interior Design Portfolio",
      description: "The requested project could not be found."
    };
  }
  
  return {
    title: `${project.name} | Interior Design Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Interior Design Portfolio`,
      description: project.description,
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
