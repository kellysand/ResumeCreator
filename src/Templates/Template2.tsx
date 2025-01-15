
function Temp2() {
  return (
    <div
      style={{
        width: '625px', // Original width
        height: '297mm', // A4 height
        padding: '30px',
        border: '1px solid #ddd',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
        lineHeight: '1.6',
        background: '#fff',
        color: '#333',
        fontFamily: 'Georgia, serif',
      }}
    >
      <header
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          paddingBottom: '10px',
          borderBottom: '2px solid #333',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '26px', letterSpacing: '1px' }}>Babalo Mbulawa</h1>
        <p style={{ margin: 0 }}>
          Cape Town, 7784 | 067-980-6629 |{' '}
          <a
            href="mailto:babalombulawa@gmail.com"
            style={{ color: '#333', textDecoration: 'none' }}
          >
            babalombulawa@gmail.com
          </a>
        </p>
        <p style={{ margin: 0, fontWeight: 'bold' }}>Frontend Developer L1</p>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h2
          style={{
            borderBottom: '2px solid #555',
            marginBottom: '10px',
            paddingBottom: '5px',
          }}
        >
          Summary
        </h2>
        <p>
          Hello, I'm Babalo Mbulawa, an aspiring Frontend Developer from Cape Town. I'm eager to
          apply my solid foundation in software development in a real-world setting. I am motivated,
          reliable, and excited to develop my skills further and contribute value to your company.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2
          style={{
            borderBottom: '2px solid #555',
            marginBottom: '10px',
            paddingBottom: '5px',
          }}
        >
          Experience
        </h2>
        <p>
          <strong>SprintHive, Cape Town — Document Tagger</strong>
        </p>
        <p>March 2024 - PRESENT (One-month notice period)</p>
        <ul>
          <li>
            Responsible for labeling data in documents to help train AI models for recognition
            tasks.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2
          style={{
            borderBottom: '2px solid #555',
            marginBottom: '10px',
            paddingBottom: '5px',
          }}
        >
          Education
        </h2>
        <p>
          <strong>Istudent Academy, Cape Town — IT Engineering</strong>
        </p>
        <p>March 2022 - April 2024</p>
        <p>Graduated with an 88% aggregate.</p>
        <p>
          <strong>Cape Town High School, Cape Town — Matric</strong>
        </p>
        <p>January 2019 - December 2021</p>
        <p>
          <strong>Egghead.io — Online Learning</strong>
        </p>
        <ul>
          <li>CSS Fundamentals</li>
          <li>Learn ES6 (ECMAScript 2015)</li>
          <li>The Beginner's Guide to React</li>
          <li>Understand JavaScript Arrays</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2
          style={{
            borderBottom: '2px solid #555',
            marginBottom: '10px',
            paddingBottom: '5px',
          }}
        >
          Skills
        </h2>
        <p>HTML & CSS, JavaScript, React JS, C#, SQL, Git, GitHub</p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2
          style={{
            borderBottom: '2px solid #555',
            marginBottom: '10px',
            paddingBottom: '5px',
          }}
        >
          Awards
        </h2>
        <p>Platinum Achievement in IT Engineering</p>
      </section>

      <footer style={{ textAlign: 'center', borderTop: '2px solid #333' }}>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/babalo-mbulawa-3a49b219b"
            style={{ color: '#333', textDecoration: 'underline' }}
          >
            linkedin.com/in/babalo-mbulawa
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Temp2
