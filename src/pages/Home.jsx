export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-image"> <img src="/damon.jpg" alt='Damon Baan'/></div>
      <h1 className="home-title">Hi, I'm Damon Baan.</h1>
      <p className="home-subtitle">Front end Developer specializing in React and JS</p>
      <div>
        <a href="/projects" className="btn btn-primary">View My Work</a>
        <a href="/contact" className="btn btn-secondary">Contact</a>
      </div>
      
      <div style={{ marginTop: '50px' }}>
        <h2>My Skills</h2>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '10px', 
          marginTop: '20px'
        }}>
          {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Vite'].map((skill, index) => (
            <div key={index} style={{ 
              background: '#fff', 
              padding: '10px 20px', 
              borderRadius: '4px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}