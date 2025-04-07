import * as React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

interface Project {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    // Fetch projects from YouTrack API or use dummy data for demo
    fetchProjects();
    // Load toggle state from the HTTP handler
    fetchToggleState();
  }, []);

  const fetchProjects = async () => {
    try {
      // Replace this with a call to the YouTrack API if available
      const data: Project[] = [
        { id: "1", name: "Project A" },
        { id: "2", name: "Project B" }
      ];
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  const fetchToggleState = async () => {
    try {
      const response = await fetch("/toggle");
      const data = await response.json();
      setToggle(data.enabled);
    } catch (error) {
      console.error("Failed to fetch toggle state", error);
    }
  };

  const handleToggle = async () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    try {
      await fetch("/toggle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ enabled: newToggle })
      });
    } catch (error) {
      console.error("Failed to update toggle state", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>YouTrack App</h1>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      <h2>Administration</h2>
      <label>
        <input
          type="checkbox"
          checked={toggle}
          onChange={handleToggle}
        />
        Enable flag
      </label>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
