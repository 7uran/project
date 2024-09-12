"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/card/ProjectCard";
import { useRequestMutation } from "@/http/axiosFetcher";
import { Project } from "@/types/type";
import EmptyState from "../components/emptyState/emptyState";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { trigger: loadProjects, isMutating, error } = useRequestMutation<{ message: string, data: Project[] }>(
    "projects",
    {
      method: "GET",
      module: "devApi",
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching projects...");
        const response = await loadProjects();
        console.log("Response:", response);
        if (response && response.data) {
          setProjects(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchData();
  }, [loadProjects]);

  if (isMutating) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-green-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-red-100 text-red-600 rounded-md p-4">
          <h2 className="font-bold">Error:</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="px-4 py-8">

      <div className="mb-8">
        <Link href="/create">
          <button className="p-2 bg-blue-600 text-white rounded">Create Project</button>
        </Link>
      </div>


      <div className="w-[1240px] mx-auto gap-10 flex flex-wrap">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.description}
              user={project.user}
              status={project.status}
              issues={project.issues}
              resolved={project.resolved}
              comment={project.comment}
              progress={project.progress}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
