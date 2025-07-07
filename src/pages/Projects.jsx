export default function Projects() {
  // Example project data
  const projects = [
    { id: 1, title: 'Blog', description: 'Built with React and Node.js' },
    { id: 2, title: 'Portfolio Site', description: 'Created with React, Vite and Node.js' },
    { id: 3, title: 'hub', description: 'Full stack application with' },
    { id: 4, title: 'small games', description: 'Python and Javascript based games', link: 'https://justbedamonbaan.itch.io/' },
  ];

  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">Visit project</a>
          </div>
        ))}
      </div>
    </div>
  );
}