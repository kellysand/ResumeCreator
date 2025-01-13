import React from 'react';

const Temp1: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', background: 'white', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px' }}>
      <header style={{ textAlign: 'center', background: '#4CAF50', color: 'white', padding: '10px' }}>
        <h1 style={{ margin: '0' }}>Babalo Mbulawa</h1>
        <p>
          Cape Town, 7784 | 067-980-6629 |{' '}
          <a href="mailto:babalombulawa@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>
            babalombulawa@gmail.com
          </a>
        </p>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>About Me</h2>
        <p>
          Hello, I'm Babalo Mbulawa, an aspiring Frontend Developer from Cape Town. I'm eager to apply my solid foundation in
          software development in a real-world setting. I am motivated, reliable, and excited to develop my skills further and
          contribute value to your company.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>Experience</h2>
        <p>
          <strong>SprintHive, Cape Town — Document Tagger</strong>
        </p>
        <p>March 2024 - PRESENT</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Labeling data in documents to train AI models for recognition tasks.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>Education</h2>
        <ul>
          <li>
            <strong>Istudent Academy</strong> (88% Aggregate) - IT Engineering
          </li>
          <li>
            <strong>Cape Town High School</strong> - Matriculated (Bachelor's Pass)
          </li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '30px', paddingTop: '10px', borderTop: '2px solid #333' }}>
        <p>
          Find me on LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/babalo-mbulawa-3a49b219b" style={{ color: '#4CAF50' }}>
            linkedin.com/in/babalo-mbulawa
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Temp1;
