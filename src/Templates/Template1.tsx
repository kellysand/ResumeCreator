
// interface expectedProps {
// prop : {fullName?: string;
//   address?: string;
//   phone?: string;
//   email?: string;
//   jobTitle?: string;
//   summary?: string;
//   workExperience?: Array<{
//     companyName?: string;
//     jobTitle?: string;
//     location?: string;
//     startDate?: string;
//     endDate?: string;
//     isCurrentJob?: boolean;
//     responsibilities?: string;
//   }>;
//   education?: Array<{
//     schoolName?: string;
//     location?: string;
//     degree?: string;
//     graduationDate?: string;
//   }>;
//   skills?: string[];
//   awards?: string[];
//   linkedin?: string;}
// }

// function Temp1 ({prop={}}:expectedProps) {

 
//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto', background: 'white', padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px' }}>
//       <header style={{ textAlign: 'center', background: '#4CAF50', color: 'white', padding: '10px' }}>
//         <h1 style={{ margin: '0' }}>{prop.fullName}</h1>
//         <p>
//          {prop.address} | {prop.phone} |{' '}
//           <a href={`${prop.email}`} style={{ color: 'white', textDecoration: 'underline' }}>
//            {prop.email}
//           </a>
//         </p>
//       </header>

//       <section style={{ marginTop: '20px' }}>
//         <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>About Me</h2>
//         <p>
//          {prop.summary}.
//         </p>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>Experience</h2>
//         <p>
//           <strong>SprintHive, Cape Town — Document Tagger</strong>
//         </p>
//         <p>March 2024 - PRESENT</p>
//         <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
//           <li>Labeling data in documents to train AI models for recognition tasks.</li>
//         </ul>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #333', paddingBottom: '5px' }}>Education</h2>
//         <ul>
//           <li>
//             <strong>Istudent Academy</strong> (88% Aggregate) - IT Engineering
//           </li>
//           <li>
//             <strong>Cape Town High School</strong> - Matriculated (Bachelor's Pass)
//           </li>
//         </ul>
//       </section>

//       <footer style={{ textAlign: 'center', marginTop: '30px', paddingTop: '10px', borderTop: '2px solid #333' }}>
//         <p>
//           Find me on LinkedIn:{' '}
//           <a href="https://www.linkedin.com/in/babalo-mbulawa-3a49b219b" style={{ color: '#4CAF50' }}>
//             linkedin.com/in/babalo-mbulawa
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Temp1;
interface ExpectedProps {
  prop?: {
    fullName?: string;
    address?: string;
    phone?: string;
    email?: string;
    jobTitle?: string;
    summary?: string;
    workExperience?: Array<{
      companyName?: string;
      jobTitle?: string;
      location?: string;
      startDate?: string;
      endDate?: string;
      isCurrentJob?: boolean;
      responsibilities?: string;
    }>;
    education?: Array<{
      schoolName?: string;
      location?: string;
      degree?: string;
      graduationDate?: string;
    }>;
    skills?: string[];
    awards?: string[];
    linkedin?: string;
  };
}

function Temp1({ prop = {} }: ExpectedProps) {
  return (
    <div
      style={{
        width: "625px",
        margin: "auto",
        background: "white",
        padding: "20px",
        border: "2px solid #4CAF50",
        borderRadius: "8px",
       
      }}
    >
      {/* HEADER */}
      <header
        style={{
          textAlign: "center",
          background: "#4CAF50",
          color: "white",
          padding: "10px",
        }}
      >
        <h1 style={{ margin: "0" }}>{prop.fullName}</h1>
        <p>
          {prop.address} | {prop.phone} |{" "}
          {prop.email && (
            <a
              href={`mailto:${prop.email}`}
              style={{ color: "white", textDecoration: "underline" }}
            >
              {prop.email}
            </a>
          )}
        </p>
      </header>

      {/* ABOUT ME */}
      <div>
      {prop.summary && (
        <div>
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #333", paddingBottom: "5px" }}>
            About Me
          </h2>
          <p>{prop.summary}</p>
        </section></div>
      )}
</div>
      {/* EXPERIENCE */}
      {prop.workExperience && prop.workExperience.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #333", paddingBottom: "5px" }}>
            Experience
          </h2>
          {prop.workExperience.map((job, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>
                <strong>
                  {job.companyName}, {job.location} — {job.jobTitle}
                </strong>
              </p>
              <p>
                {job.startDate} - {job.isCurrentJob ? "Present" : job.endDate}
              </p>
              {job.responsibilities && (
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>{job.responsibilities}</li>
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {prop.education && prop.education.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #333", paddingBottom: "5px" }}>
            Education
          </h2>
          <ul>
            {prop.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.schoolName}</strong> — {edu.degree} ({edu.graduationDate})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* SKILLS */}
      {prop.skills && prop.skills.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #333", paddingBottom: "5px" }}>
            Skills
          </h2>
          <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {prop.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* AWARDS */}
      {prop.awards && prop.awards.length > 0 && (
        <section style={{ marginTop: "20px" }}>
          <h2 style={{ color: "#4CAF50", borderBottom: "2px solid #333", paddingBottom: "5px" }}>
            Awards
          </h2>
          <ul>
            {prop.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </section>
      )}

      {/* LINKEDIN */}

      {prop.linkedin && (
        <footer style={{ textAlign: "center", marginTop: "30px", paddingTop: "10px", borderTop: "2px solid #333" }}>
          <p>
            Find me on LinkedIn:{" "}
            <a href={prop.linkedin} style={{ color: "#4CAF50" }}>
              {prop.linkedin}
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}

export default Temp1;
