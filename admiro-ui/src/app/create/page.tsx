"use client";

import { useState } from "react";
import { useRequestMutation } from "@/http/axiosFetcher";
import { useRouter } from "next/navigation";

export default function CreateProject() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [progress, setProgress] = useState(0);
    const [issues, setIssues] = useState(0);
    const [resolved, setResolved] = useState(0);
    const [comment, setComment] = useState(0); 
    const { trigger: createProject, isMutating, error } = useRequestMutation<{ message: string }>(
        "projects",
        {
            method: "POST",
            module: "devApi",
        }
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const projectData = {
            title,
            description,
            status,
            progress,
            issues,
            resolved,
            comment,
        };

        console.log("Project data to be submitted:", projectData);

        try {
            const response = await createProject({ data: projectData });
            console.log("Project creation response:", response);
            if (response?.message) {
                router.push("/");
            }
        } catch (err: any) {
            console.error("Failed to create project:", err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-xl font-bold">Create a New Project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">
                            Project Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium">
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full p-2 mt-1 border rounded"
                        >
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="failed">Failed</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="progress" className="block text-sm font-medium">
                            Progress (%)
                        </label>
                        <input
                            id="progress"
                            type="number"
                            value={progress}
                            onChange={(e) => setProgress(parseInt(e.target.value, 10))}
                            className="w-full p-2 mt-1 border rounded"
                            required
                            min="0"
                            max="100"
                        />
                    </div>

                    <div>
                        <label htmlFor="issues" className="block text-sm font-medium">
                            Issues
                        </label>
                        <input
                            id="issues"
                            type="number"
                            value={issues}
                            onChange={(e) => setIssues(parseInt(e.target.value, 10))}
                            className="w-full p-2 mt-1 border rounded"
                            min="0"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="resolved" className="block text-sm font-medium">
                            Resolved
                        </label>
                        <input
                            id="resolved"
                            type="number"
                            value={resolved}
                            onChange={(e) => setResolved(parseInt(e.target.value, 10))}
                            className="w-full p-2 mt-1 border rounded"
                            min="0"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium">
                            Comment
                        </label>
                        <input
                            id="comment"  
                            type="number"  
                            value={comment}
                            onChange={(e) => setComment(parseInt(e.target.value, 10))} 
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-green-600 text-white rounded"
                            disabled={isMutating}
                        >
                            {isMutating ? "Creating..." : "Create Project"}
                        </button>
                    </div>
                    {error && <p className="text-red-600">{error.message}</p>}
                </form>
            </div>
        </div>
    );
}
