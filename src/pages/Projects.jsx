export default function Projects() {
  // Example project data
  const projects = [
    { id: 1, title: 'Anime-list', description: 'Search top animes and add them to you favorites', link: 'https://anime-list-lime-six.vercel.app/' },
    { id: 2, title: 'Projects', description: 'Small projects created with React, Vite and Node.js', link: 'https://projects-seven.vercel.app/'},
    { id: 3, title: 'small games', description: 'Python and Javascript based games', link: 'https://justbedamonbaan.itch.io/' },
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