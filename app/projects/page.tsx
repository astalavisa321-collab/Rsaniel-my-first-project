
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Your Name",
};

const projects = [
  {
    id: 1,
    name: "Vehicle management system",
    description: "vehicle management system.",
  },
  {
    id: 2,
    name: "Sagbayan waterworks billing system",
    description: "Sagbayan waterworks billing system.",
  },
  {
    id: 3,
    name: "QR Code based entry system",
    description: "QR Code based entry system.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        PROJECTS PAGE
      </h1>

      <p className="mt-2">
        Here are some of my projects.
      </p>

      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div key={project.id}>
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
