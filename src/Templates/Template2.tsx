
// function temp2() {
//   return (
//     <div
//       style={{
//         width: '625px', // Original width
//         height: '297mm', // A4 height
//         padding: '30px',
//         border: '1px solid #ddd',
//         boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
//         lineHeight: '1.6',
//         background: '#fff',
//         color: '#333',
//         fontFamily: 'Georgia, serif',
//       }}
//     >
//       <header
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           paddingBottom: '10px',
//           borderBottom: '2px solid #333',
//         }}
//       >
//         <h1 style={{ margin: 0, fontSize: '26px', letterSpacing: '1px' }}>Babalo Mbulawa</h1>
//         <p style={{ margin: 0 }}>
//           Cape Town, 7784 | 067-980-6629 |{' '}
//           <a
//             href="mailto:babalombulawa@gmail.com"
//             style={{ color: '#333', textDecoration: 'none' }}
//           >
//             babalombulawa@gmail.com
//           </a>
//         </p>
//         <p style={{ margin: 0, fontWeight: 'bold' }}>Frontend Developer L1</p>
//       </header>

//       <section style={{ marginTop: '20px' }}>
//         <h2
//           style={{
//             borderBottom: '2px solid #555',
//             marginBottom: '10px',
//             paddingBottom: '5px',
//           }}
//         >
//           Summary
//         </h2>
//         <p>
//           Hello, I'm Babalo Mbulawa, an aspiring Frontend Developer from Cape Town. I'm eager to
//           apply my solid foundation in software development in a real-world setting. I am motivated,
//           reliable, and excited to develop my skills further and contribute value to your company.
//         </p>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2
//           style={{
//             borderBottom: '2px solid #555',
//             marginBottom: '10px',
//             paddingBottom: '5px',
//           }}
//         >
//           Experience
//         </h2>
//         <p>
//           <strong>SprintHive, Cape Town — Document Tagger</strong>
//         </p>
//         <p>March 2024 - PRESENT (One-month notice period)</p>
//         <ul>
//           <li>
//             Responsible for labeling data in documents to help train AI models for recognition
//             tasks.
//           </li>
//         </ul>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2
//           style={{
//             borderBottom: '2px solid #555',
//             marginBottom: '10px',
//             paddingBottom: '5px',
//           }}
//         >
//           Education
//         </h2>
//         <p>
//           <strong>Istudent Academy, Cape Town — IT Engineering</strong>
//         </p>
//         <p>March 2022 - April 2024</p>
//         <p>Graduated with an 88% aggregate.</p>
//         <p>
//           <strong>Cape Town High School, Cape Town — Matric</strong>
//         </p>
//         <p>January 2019 - December 2021</p>
//         <p>
//           <strong>Egghead.io — Online Learning</strong>
//         </p>
//         <ul>
//           <li>CSS Fundamentals</li>
//           <li>Learn ES6 (ECMAScript 2015)</li>
//           <li>The Beginner's Guide to React</li>
//           <li>Understand JavaScript Arrays</li>
//         </ul>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2
//           style={{
//             borderBottom: '2px solid #555',
//             marginBottom: '10px',
//             paddingBottom: '5px',
//           }}
//         >
//           Skills
//         </h2>
//         <p>HTML & CSS, JavaScript, React JS, C#, SQL, Git, GitHub</p>
//       </section>

//       <section style={{ marginTop: '20px' }}>
//         <h2
//           style={{
//             borderBottom: '2px solid #555',
//             marginBottom: '10px',
//             paddingBottom: '5px',
//           }}
//         >
//           Awards
//         </h2>
//         <p>Platinum Achievement in IT Engineering</p>
//       </section>

//       <footer style={{ textAlign: 'center', borderTop: '2px solid #333' }}>
//         <p>
//           LinkedIn:{' '}
//           <a
//             href="https://www.linkedin.com/in/babalo-mbulawa-3a49b219b"
//             style={{ color: '#333', textDecoration: 'underline' }}
//           >
//             linkedin.com/in/babalo-mbulawa
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default temp2
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

// function Temp2({ prop = {} }: ExpectedProps) {
//   return (
//     <div
//       style={{
//         width: '32.55vw',
//         height: '87.96vh',
//         padding: "30px",
//         border: "1px solid #ddd",
//         boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
//         lineHeight: "1.6",
//         background: "#fff",
//         color: "#333",
//         fontFamily: "Georgia, serif",
        
//       }}
//     >
//       {/* HEADER */}
//       <header
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           paddingBottom: "10px",
//           borderBottom: "2px solid #333",
//         }}
//       >
//         <h1 style={{ margin: 0, fontSize: "26px", letterSpacing: "1px" }}>{prop.fullName}</h1>
//         <p style={{ margin: 0 }}>
//           {prop.address} | {prop.phone} |{" "}
//           {prop.email && (
//             <a href={`mailto:${prop.email}`} style={{ color: "#333", textDecoration: "none" }}>
//               {prop.email}
//             </a>
//           )}
//         </p>
//         {prop.jobTitle && <p style={{ margin: 0, fontWeight: "bold" }}>{prop.jobTitle}</p>}
//       </header>

//       {/* SUMMARY */}
//       {prop.summary && (
//         <section style={{ marginTop: "20px" }}>
//           <h2 style={{ borderBottom: "2px solid #555", marginBottom: "10px", paddingBottom: "5px" }}>
//             Summary
//           </h2>
//           <p>{prop.summary}</p>
//         </section>
//       )}

//       {/* EXPERIENCE */}
//       {prop.workExperience && prop.workExperience.length > 0 && (
//         <section style={{ marginTop: "20px" }}>
//           <h2 style={{ borderBottom: "2px solid #555", marginBottom: "10px", paddingBottom: "5px" }}>
//             Experience
//           </h2>
//           {prop.workExperience.map((job, index) => (
//             <div key={index} style={{ marginBottom: "10px" }}>
//               <p>
//                 <strong>
//                   {job.companyName}, {job.location} — {job.jobTitle}
//                 </strong>
//               </p>
//               <p>
//                 {job.startDate} - {job.isCurrentJob ? "Present" : job.endDate}
//               </p>
//               {job.responsibilities && (
//                 <ul>
//                   <li>{job.responsibilities}</li>
//                 </ul>
//               )}
//             </div>
//           ))}
//         </section>
//       )}

//       {/* EDUCATION */}
//       {prop.education && prop.education.length > 0 && (
//         <section style={{ marginTop: "20px" }}>
//           <h2 style={{ borderBottom: "2px solid #555", marginBottom: "10px", paddingBottom: "5px" }}>
//             Education
//           </h2>
//           {prop.education.map((edu, index) => (
//             <div key={index} style={{ marginBottom: "10px" }}>
//               <p>
//                 <strong>{edu.schoolName}, {edu.location}</strong>
//               </p>
//               <p>{edu.degree} ({edu.graduationDate})</p>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* SKILLS */}
//       {prop.skills && prop.skills.length > 0 && (
//         <section style={{ marginTop: "20px" }}>
//           <h2 style={{ borderBottom: "2px solid #555", marginBottom: "10px", paddingBottom: "5px" }}>
//             Skills
//           </h2>
//           <ul>
//             {prop.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </section>
//       )}

//       {/* AWARDS */}
//       {prop.awards && prop.awards.length > 0 && (
//         <section style={{ marginTop: "20px" }}>
//           <h2 style={{ borderBottom: "2px solid #555", marginBottom: "10px", paddingBottom: "5px" }}>
//             Awards
//           </h2>
//           <ul>
//             {prop.awards.map((award, index) => (
//               <li key={index}>{award}</li>
//             ))}
//           </ul>
//         </section>
//       )}

//       {/* LINKEDIN */}
//       {prop.linkedin && (
//         <footer style={{ textAlign: "center", borderTop: "2px solid #333", marginTop: "20px" }}>
//           <p>
//             LinkedIn:{" "}
//             <a href={prop.linkedin} style={{ color: "#333", textDecoration: "underline" }}>
//               {prop.linkedin}
//             </a>
//           </p>
//         </footer>
//       )}
//     </div>
//   );
// }

// export default Temp2;


function Temp2({ prop = {} }: ExpectedProps) {
  return (
    <div
      style={{
        width: '32.55vw',
        height: 'fit-content',
        padding: "3vh",
        border: "1px solid #ddd",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        lineHeight: "1.4", // Reduced line spacing
        background: "#fff",
        color: "#333",
        fontFamily: "Georgia, serif",
        fontSize: "1.8vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevents total overflow
      }}
    >
      {/* CONTENT WRAPPER WITH SCROLLING */}
      <div
        style={{
          flexGrow: 1, // Expands to fill available space
          overflowY: "auto", // Enables scrolling if needed
          maxHeight: "100%", // Ensures content fits
        }}
      >
        {/* HEADER */}
        <header
          style={{
            textAlign: "center",
            marginBottom: "1vh",
            paddingBottom: "0.5vh",
            borderBottom: "0.25vh solid #333",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis", // Prevents long text from breaking layout
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2.8vh", letterSpacing: "0.1vh", overflow: "hidden", textOverflow: "ellipsis" }}>
            {prop.fullName}
          </h1>
          <p style={{ margin: 0, fontSize: "1.6vh", overflow: "hidden", textOverflow: "ellipsis" }}>
            {prop.address} | {prop.phone} |{" "}
            {prop.email && (
              <a href={`mailto:${prop.email}`} style={{ color: "#333", textDecoration: "none" }}>
                {prop.email}
              </a>
            )}
          </p>
          {prop.jobTitle && <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.8vh" }}>{prop.jobTitle}</p>}
        </header>

        {/* SUMMARY */}
        {prop.summary && (
          <section style={{ marginTop: "1vh" }}>
            <h2 style={{ borderBottom: "0.25vh solid #555", marginBottom: "0.5vh", fontSize: "2vh" }}>
              Summary
            </h2>
            <p style={{ fontSize: "1.6vh", overflowWrap: "break-word" }}>{prop.summary}</p>
          </section>
        )}

        {/* EXPERIENCE */}
        {prop.workExperience && prop.workExperience.length > 0 && (
          <section style={{ marginTop: "1vh" }}>
            <h2 style={{ borderBottom: "0.25vh solid #555", marginBottom: "0.5vh", fontSize: "2vh" }}>
              Experience
            </h2>
            {prop.workExperience.map((job, index) => (
              <div key={index} style={{ marginBottom: "0.8vh" }}>
                <p style={{ fontSize: "1.6vh", fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {job.companyName}, {job.location} — {job.jobTitle}
                </p>
                <p style={{ fontSize: "1.4vh" }}>
                  {job.startDate} - {job.isCurrentJob ? "Present" : job.endDate}
                </p>
                {job.responsibilities && (
                  <ul style={{ fontSize: "1.4vh", paddingLeft: "2vh", margin: "0.5vh 0" }}>
                    <li style={{ overflowWrap: "break-word" }}>{job.responsibilities}</li>
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {prop.education && prop.education.length > 0 && (
          <section style={{ marginTop: "1vh" }}>
            <h2 style={{ borderBottom: "0.25vh solid #555", marginBottom: "0.5vh", fontSize: "2vh" }}>
              Education
            </h2>
            {prop.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: "0.8vh" }}>
                <p style={{ fontSize: "1.6vh", fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {edu.schoolName}, {edu.location}
                </p>
                <p style={{ fontSize: "1.4vh" }}>{edu.degree} ({edu.graduationDate})</p>
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        {prop.skills && prop.skills.length > 0 && (
          <section style={{ marginTop: "1vh" }}>
            <h2 style={{ borderBottom: "0.25vh solid #555", marginBottom: "0.5vh", fontSize: "2vh" }}>
              Skills
            </h2>
            <ul style={{ fontSize: "1.4vh", display: "flex", flexWrap: "wrap", gap: "1vh", listStyle: "none", padding: 0 }}>
              {prop.skills.map((skill, index) => (
                <li key={index} style={{ padding: "0.5vh", background: "#eee", borderRadius: "0.5vh" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* AWARDS */}
        {prop.awards && prop.awards.length > 0 && (
          <section style={{ marginTop: "1vh" }}>
            <h2 style={{ borderBottom: "0.25vh solid #555", marginBottom: "0.5vh", fontSize: "2vh" }}>
              Awards
            </h2>
            <ul style={{ fontSize: "1.4vh", paddingLeft: "1vh" }}>
              {prop.awards.map((award, index) => (
                <li key={index} style={{ overflowWrap: "break-word" }}>{award}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* LINKEDIN */}
      {prop.linkedin && (
        <footer style={{ textAlign: "center", borderTop: "0.25vh solid #333", marginTop: "1vh", paddingTop: "1vh" }}>
          <p style={{ fontSize: "1.4vh" }}>
            LinkedIn:{" "}
            <a href={prop.linkedin} style={{ color: "#333", textDecoration: "underline", overflowWrap: "break-word" }}>
              {prop.linkedin}
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}

export default Temp2;
