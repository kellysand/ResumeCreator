
// function temp() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', width: 'fit-content' }}>
//       <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: 0, lineHeight: 1.5, maxWidth: '800px', border: '1px solid #ddd', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
//         <header style={{ textAlign: 'center', paddingBottom: '20px', borderBottom: '2px solid #333' }}>
//           <h1 style={{ margin: 0, fontSize: '24px' }}>Babalo Mbulawa</h1>
//           <p>Cape Town, 7784 | 067-980-6629 | babalombulawa@gmail.com</p>
//           <p>Frontend Developer L1</p>
//         </header>

//         <section style={{ margin: '20px 0' }}>
//           <h2 style={{ borderBottom: '2px solid #444', paddingBottom: '5px' }}>Summary</h2>
//           <p>
//             Hello, I'm Babalo Mbulawa, an aspiring Frontend Developer from Cape Town. I'm eager to apply my solid foundation in software development in a real-world setting. I am motivated, reliable, and excited to develop my skills further and contribute value to your company.
//           </p>
//         </section>

//         <section style={{ margin: '20px 0' }}>
//           <h2 style={{ borderBottom: '2px solid #444', paddingBottom: '5px' }}>Experience</h2>
//           <p><strong>SprintHive, Cape Town — Document Tagger</strong></p>
//           <p>March 2024 - PRESENT (One month notice period)</p>
//           <ul>
//             <li>Responsible for labeling data in documents to help train AI models for recognition tasks.</li>
//           </ul>
//         </section>

//         <section style={{ margin: '20px 0' }}>
//           <h2 style={{ borderBottom: '2px solid #444', paddingBottom: '5px' }}>Education</h2>
//           <p><strong>Istudent Academy, Cape Town — IT Engineering</strong></p>
//           <p>March 2022 - April 2024</p>
//           <ul>
//             <li>Studied System Development, System Support, and basic CISCO CCNA Networking.</li>
//             <li>Graduated with an 88% aggregate.</li>
//           </ul>
//           <p><strong>Cape Town High School, Cape Town — Matric</strong></p>
//           <p>January 2019 - December 2021</p>
//           <p><strong>Egghead.io</strong></p>
//           <ul>
//             <li>CSS Fundamentals</li>
//             <li>Learn ES6 (ECMAScript 2015)</li>
//             <li>The Beginner's Guide to React</li>
//             <li>Understand JavaScript Arrays</li>
//           </ul>
//         </section>

//         <section style={{ margin: '20px 0' }}>
//           <h2 style={{ borderBottom: '2px solid #444', paddingBottom: '5px' }}>Skills</h2>
//           <p>HTML & CSS, JavaScript, React JS, C#, SQL, Git, GitHub</p>
//         </section>

//         <section style={{ margin: '20px 0' }}>
//           <h2 style={{ borderBottom: '2px solid #444', paddingBottom: '5px' }}>Awards</h2>
//           <p>Platinum Achievement in IT Engineering</p>
//         </section>

//         <footer style={{ textAlign: 'center', borderTop: '2px solid #333', paddingTop: '10px', marginTop: '20px' }}>
//           <p>
//             LinkedIn: <a href="https://www.linkedin.com/in/babalo-mbulawa-3a49b219b" style={{ color: 'blue' }}>linkedin.com/in/babalo-mbulawa</a>
//           </p>
//         </footer>
//       </div>
//     </div>
    
//   )
// }

// export default temp
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
      details?: string[];
    }>;
    skills?: string[];
    awards?: string[];
    linkedin?: string;
  };
}

const Temp = ({ prop = {} }: ExpectedProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center",  width: "625px",border: "1px solid #ddd", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", padding: 0, lineHeight: 1.5, maxWidth: "800px",  }}>
        
        {/* Header */}
        <header style={{ textAlign: "center", paddingBottom: "20px", borderBottom: "2px solid #333" }}>
          <h1 style={{ margin: 0, fontSize: "24px" }}>{prop.fullName}</h1>
          <p>{prop.address} | {prop.phone} | {prop.email}</p>
          <p>{prop.jobTitle}</p>
        </header>

        {/* Summary */}
        {prop.summary && (
          <section style={{ margin: "20px 0" }}>
            <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "5px" }}>Summary</h2>
            <p>{prop.summary}</p>
          </section>
        )}

        {/* Experience */}
        {prop.workExperience && prop.workExperience.length > 0 && (
          <section style={{ margin: "20px 0" }}>
            <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "5px" }}>Experience</h2>
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
          <section style={{ margin: "20px 0" }}>
            <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "5px" }}>Education</h2>
            {prop.education.map((edu, index) => (
              <div key={index}>
                <p><strong>{edu.schoolName} — {edu.degree}</strong></p>
                <p>{edu.graduationDate}</p>
                {edu.details && edu.details.length > 0 && <ul>{edu.details.map((detail, i) => <li key={i}>{detail}</li>)}</ul>}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {prop.skills && prop.skills.length > 0 && (
          <section style={{ margin: "20px 0" }}>
            <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "5px" }}>Skills</h2>
            <p>{prop.skills.join(", ")}</p>
          </section>
        )}

        {/* Awards */}
        {prop.awards && prop.awards.length > 0 && (
          <section style={{ margin: "20px 0" }}>
            <h2 style={{ borderBottom: "2px solid #444", paddingBottom: "5px" }}>Awards</h2>
            <ul>{prop.awards.map((award, index) => <li key={index}>{award}</li>)}</ul>
          </section>
        )}

        {/* Footer */}
        {prop.linkedin && (
          <footer style={{ textAlign: "center", borderTop: "2px solid #333", paddingTop: "10px", marginTop: "20px" }}>
            <p>
              LinkedIn: <a href={prop.linkedin} style={{ color: "blue" }}>{prop.linkedin}</a>
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Temp;
