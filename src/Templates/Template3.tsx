// import React from 'react';

// const temp3 = () => {
//   return (
//     <div style={{ display: 'flex', maxWidth: '800px', margin: '40px auto', background: 'white', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//       {/* Sidebar */}
//       <aside style={{ width: '30%', background: '#4CAF50', color: 'white', padding: '20px' }}>
//         <h2 style={{ marginTop: 0, fontSize: '22px' }}>Babalo Mbulawa</h2>
//         <p style={{ margin: '10px 0' }}>Cape Town, 7784</p>
//         <p>067-980-6629</p>
//         <p>
//           <a href="mailto:babalombulawa@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>
//             babalombulawa@gmail.com
//           </a>
//         </p>
//         <p><strong>Frontend Developer L1</strong></p>
//         <hr style={{ border: '1px solid white', margin: '20px 0' }} />
//         <h3>Skills</h3>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li>HTML & CSS</li>
//           <li>JavaScript</li>
//           <li>React JS</li>
//           <li>C#</li>
//           <li>SQL</li>
//           <li>Git & GitHub</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main style={{ width: '70%', padding: '20px' }}>
//         <section>
//           <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '5px' }}>Summary</h2>
//           <p>
//             Hello, I'm Babalo Mbulawa, an aspiring Frontend Developer from Cape Town. I'm eager to apply my solid foundation in
//             software development in a real-world setting. I am motivated, reliable, and excited to develop my skills further and
//             contribute value to your company.
//           </p>
//         </section>

//         <section style={{ marginTop: '20px' }}>
//           <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '5px' }}>Experience</h2>
//           <p><strong>SprintHive, Cape Town — Document Tagger</strong></p>
//           <p>March 2024 - PRESENT</p>
//           <ul>
//             <li>Responsible for labeling data in documents to help train AI models for recognition tasks.</li>
//           </ul>
//         </section>

//         <section style={{ marginTop: '20px' }}>
//           <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '5px' }}>Education</h2>
//           <ul>
//             <li><strong>Istudent Academy</strong> (88% Aggregate) - IT Engineering</li>
//             <li><strong>Cape Town High School</strong> - Matriculated (Bachelor's Pass)</li>
//           </ul>
//         </section>

//         <section style={{ marginTop: '20px' }}>
//           <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '5px' }}>Awards</h2>
//           <p>Platinum Achievement in IT Engineering</p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default temp3;
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
      degree?: string;
      graduationDate?: string;
    }>;
    skills?: string[];
    awards?: string[];
  };
}

const Temp3 = ({ prop = {} }: ExpectedProps) => {
  return (
    <div style={{ display: "flex", width: "625px", margin: "40px auto", background: "white", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
      {/* Sidebar */}
      <aside style={{ width: "30%", background: "#4CAF50", color: "white", padding: "20px" }}>
        <h2 style={{ marginTop: 0, fontSize: "22px" }}>{prop.fullName}</h2>
        <p style={{ margin: "10px 0" }}>{prop.address}</p>
        <p>{prop.phone}</p>
        {prop.email && (
          <p>
            <a href={`mailto:${prop.email}`} style={{ color: "white", textDecoration: "underline" }}>
              {prop.email}
            </a>
          </p>
        )}
        {prop.jobTitle && <p><strong>{prop.jobTitle}</strong></p>}
        <hr style={{ border: "1px solid white", margin: "20px 0" }} />

        {/* Skills */}
        {prop.skills && prop.skills.length > 0 && (
          <>
            <h3>Skills</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {prop.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        )}
      </aside>

      {/* Main Content */}
      <main style={{ width: "70%", padding: "20px" }}>
        {/* Summary */}
        {prop.summary && (
          <section>
            <h2 style={{ borderBottom: "2px solid #4CAF50", paddingBottom: "5px" }}>Summary</h2>
            <p>{prop.summary}</p>
          </section>
        )}

        {/* Experience */}
        {prop.workExperience && prop.workExperience.length > 0 && (
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ borderBottom: "2px solid #4CAF50", paddingBottom: "5px" }}>Experience</h2>
            {prop.workExperience.map((job, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <p><strong>{job.companyName}, {job.location} — {job.jobTitle}</strong></p>
                <p>{job.startDate} - {job.isCurrentJob ? "Present" : job.endDate}</p>
                {job.responsibilities && <ul><li>{job.responsibilities}</li></ul>}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {prop.education && prop.education.length > 0 && (
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ borderBottom: "2px solid #4CAF50", paddingBottom: "5px" }}>Education</h2>
            <ul>
              {prop.education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.schoolName}</strong> - {edu.degree} ({edu.graduationDate})
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Awards */}
        {prop.awards && prop.awards.length > 0 && (
          <section style={{ marginTop: "20px" }}>
            <h2 style={{ borderBottom: "2px solid #4CAF50", paddingBottom: "5px" }}>Awards</h2>
            <ul>
              {prop.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default Temp3;
