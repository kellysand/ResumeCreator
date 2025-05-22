import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import './deviceSize.css';
import { Link } from "react-router-dom";
import { useState,  } from "react";
import html2canvas from "html2canvas";
//import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import { useRef } from "react";
// import useGetDataHook from "../Hooks/getDataHook";
interface FormData {
  fullName: string;
  address: string;
  phone: string;
  email: string;
  jobTitle: string;
  summary: string;
  workExperience: Array<{
    companyName: string;
    jobTitle: string;
    location: string;
    startDate: string;
    endDate: string;
    isCurrentJob: boolean;
    responsibilities: string;
  }>;
  education: Array<{
    schoolName: string;
    location: string;
    degree: string;
    graduationDate: string;
  }>; 
  skills: string[];
  awards: string[];
  linkedin: string;
}
interface CreateCvProps {
  ChosenTemp: React.FC<{prop: any}> | null;
  formData: FormData ;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}
function CreateCv({ ChosenTemp,formData, setFormData}: CreateCvProps) {
  // const validationSchema = Yup.object({
  //   fullName: Yup.string().required("Full Name is required"),
  //   address: Yup.string().required("Address is required"),
   
    
      
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   jobTitle: Yup.string().required("Job Title is required"),
  //   summary: Yup.string().required("Summary is required"),

  //   workExperience: Yup.array().of(
  //     Yup.object().shape({
  //       companyName: Yup.string().required("Company name is required"),
  //       jobTitle: Yup.string().required("Job title is required"),
  //       location: Yup.string().required("Location is required"),
  //       startDate: Yup.date()
  //         .nullable()
  //         .required("Start date is required")
  //         .typeError("Invalid date format"),
  //       endDate: Yup.date()
  //         .nullable()
  //         .when("isCurrentJob", {
  //           is: false,
  //           then: (schema) =>
  //             schema
  //               .required("End date is required")
  //               .min(
  //                 Yup.ref("startDate"),
  //                 "End date must be after the start date"
  //               )
  //               .typeError("Invalid date format"),
  //           otherwise: (schema) => schema.nullable(),
  //         }),
  //       isCurrentJob: Yup.boolean(),
  //       responsibilities: Yup.string().required(
  //         "Responsibilities are required"
  //       ),
  //     })
  //   ),
  //   education: Yup.array().of(Yup.object().shape({
  //     schoolName: Yup.string().required("School name is required"),
  //     location: Yup.string().required("Location is required"),
  //     degree: Yup.string().required("Degree/Certificate is required"),
  //     graduationDate: Yup.date().required("Graduation date is required"),
  //   })),

  //   linkedin: Yup.string().url("Invalid LinkedIn URL"),
  // });
 
  const [skillInput, setSkillInput] = useState("");
  const [awardInput, setAwardInput] = useState('');

const handelFieldChange =(e:React.ChangeEvent<HTMLInputElement>, handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void)=>{
   const {name,value} = e.target
  handleChange(e)
  localStorage.setItem(name,value)
}
const contentRef = useRef<HTMLDivElement | null>(null); 
const downloadPDF = () => {
  const resumeElement =contentRef.current
  if (!resumeElement) return;

  html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait mode, millimeters, A4 size

    const imgWidth = 210; // A4 width in mm
    const imgHeight = 297; 
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf"); // Download as "resume.pdf"
  });
};


 
  
  
  return (
    <div  id="cvCreator" className="flex sm:block">
      <div className=" flex-1">
        <Formik
          initialValues={{
            fullName: localStorage.getItem('fullName') || "",
            address: localStorage.getItem('address') || "",
            phone: localStorage.getItem('phone') || "",
            email: localStorage.getItem('email') || "",
            jobTitle: localStorage.getItem('jobTitle') || "",
            summary:  localStorage.getItem('summary') || "",
            workExperience: [
              {
                companyName: localStorage.getItem(`workExperience.0.companyName`) || "",
                jobTitle:  localStorage.getItem(`workExperience.0.jobTitle`) || "",
                location:  localStorage.getItem(`workExperience.0.location`) || "",
                startDate: localStorage.getItem(  `workExperience.0.startDate`) || "",
                endDate: localStorage.getItem(  `workExperience.0.endDate`) || "",
                isCurrentJob: localStorage.getItem('workExperience.0.isCurrentJob') === 'false',
                responsibilities: localStorage.getItem('workExperience.0.responsibilities') || "",
              },
            ],
            education: [
              {
                schoolName: localStorage.getItem(`education.0.schoolName`) || "",
                location: localStorage.getItem('education.0.location') || "",
                degree: localStorage.getItem('education.0.degree') || "",
                graduationDate: localStorage.getItem('education.0.graduationDate') || "",
              },
            ],

            skills: [],
            awards: [],
            linkedin: localStorage.getItem('linkedin') || "",
          }}
          // validationSchema={validationSchema}
          // validate={(values) => {
          //   try {
          //     validationSchema.validateSync(values, { abortEarly: false });
          //   } catch (error) {
          //     if (error instanceof Yup.ValidationError) {
          //       // // console.log(error.errors);

          //     }
          //   }
          // }}
          onSubmit={(values) => {
           
            console.log(values);
           setFormData(values)

          }}
        >
          {({ values ,handleChange }) => (
            <Form className="max-w-3xl mx-auto pl-4 pr-4 bg-white shadow-md rounded-md ">
              <div className=" bg-gray-100 h-dvh p-4 overflow-y-scroll">
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Resume Input Form
                </h1>

                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <Field
                    name="fullName"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.fullName}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <Field
                    name="address"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.address}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <Field
                    name="phone"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.phone}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"  
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title
                  </label>
                  <Field
                    name="jobTitle"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.jobTitle}
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="summary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Summary
                  </label>
                  <Field
                    name="summary"
                    as="textarea"
                    rows="4"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.summary}
                  />
                  <ErrorMessage
                    name="summary"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <FieldArray name="workExperience">
                  {({ push, remove }) => (
                    <div className="mb-6">
                      <label className="block text-lg font-medium text-gray-700 mb-4">
                        Work Experience
                      </label>
                      {values.workExperience.map((_, index) => (
                        <div
                          key={index}
                          className="mb-6 border p-4 rounded-md bg-gray-50 "
                        >
                          <button
                            onClick={() => remove(index)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
                          >
                            Delete
                          </button>{" "}
                          <span className=" text-white bg-gray-500  w-4 h-4 flex justify-center justify-self-end items-center rounded-full">
                            {index + 1}
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor={`workExperience.${index}.companyName`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                Company Name
                              </label>
                              <Field
                                name={`workExperience.${index}.companyName`}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].companyName}

                              />
                              <ErrorMessage
                                name={`workExperience.${index}.companyName`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor={`workExperience.${index}.jobTitle`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                Job Title
                              </label>
                              <Field
                                name={`workExperience.${index}.jobTitle`}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].jobTitle}
                              />
                              <ErrorMessage
                                name={`workExperience.${index}.jobTitle`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor={`workExperience.${index}.location`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                Location
                              </label>
                              <Field
                                name={`workExperience.${index}.location`}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].location}
                              />
                              <ErrorMessage
                                name={`workExperience.${index}.location`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor={`workExperience.${index}.startDate`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                Start Date
                              </label>
                              <Field
                                type="date"
                                name={`workExperience.${index}.startDate`}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].startDate}
                              />
                              <ErrorMessage
                                name={`workExperience.${index}.startDate`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>

                            <div className="flex items-center mt-2">
                              <Field
                                type="checkbox"
                                name={`workExperience.${index}.isCurrentJob`}
                                className="mr-2"
                              />
                              <label
                                htmlFor={`workExperience.${index}.isCurrentJob`}
                                className="text-sm font-medium text-gray-700"
                              >
                                This is my current job
                              </label>
                            </div>
                            <div>
                              <label
                                htmlFor={`workExperience.${index}.endDate`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                End Date
                              </label>
                              <Field
                                type="date"
                                name={`workExperience.${index}.endDate`}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].endDate}
                              />
                              <ErrorMessage
                                name={`workExperience.${index}.endDate`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                            <div className="col-span-2">
                              <label
                                htmlFor={`workExperience.${index}.responsibilities`}
                                className="block text-sm font-medium text-gray-700"
                              >
                                Responsibilities
                              </label>
                              <Field
                                as="textarea"
                                name={`workExperience.${index}.responsibilities`}
                                rows="4"
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                                value={values.workExperience[index].responsibilities}
                              />
                              <ErrorMessage
                                name={`workExperience.${index}.responsibilities`}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
                        type="button"
                        onClick={() =>{ 
                         const index =0
                          push({
                            companyName: localStorage.getItem(`workExperience.${index + 1}.companyName`),
                            jobTitle: localStorage.getItem(`workExperience.${index + 1}.jobTitle`),
                            location: localStorage.getItem(`workExperience.${index + 1}.location`),
                            startDate: localStorage.getItem(`workExperience.${index + 1}.startDate`),
                            endDate: localStorage.getItem(`workExperience.${index + 1}.endDate`),
                            isCurrentJob:localStorage.getItem(`workExperience.${index + 1}.isCurrentJob`),
                            responsibilities: localStorage.getItem(`workExperience.${index + 1}.responsibilities`),
                          })
                        }}
                      >
                        <b>+</b> Add Work
                      </button>
                    </div>
                  )}
                </FieldArray>

                <FieldArray name="education">
                  {({ push, remove }) => (
                    <div className="mb-4">
                      <label className="block text-lg font-medium text-gray-700 mb-4">
                        Education
                      </label>
                      {values.education.map((_, index) => (
                        <div
                          key={index}
                          className="mb-4 border p-4 rounded-md  bg-gray-50"
                        >
                          <button
                            onClick={() => remove(index)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md"
                          >
                            Delete
                          </button>{" "}
                          <span className=" text-white bg-gray-500 w-4 h-4 flex justify-center justify-self-end items-center rounded-full">
                            {index + 1}
                          </span>
                          <div className="mb-3">
                            <label
                              htmlFor={`education.${index}.schoolName`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              School Name
                            </label>
                            <Field
                              name={`education.${index}.schoolName`}
                              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                              value={values.education[index].schoolName}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                            />
                            <ErrorMessage
                              name={`education.${index}.schoolName`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor={`education.${index}.location`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              Location
                            </label>
                            <Field
                              name={`education.${index}.location`}
                              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                              value={values.education[index].location}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                            />
                            <ErrorMessage
                              name={`education.${index}.location`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor={`education.${index}.degree`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              Degree/Certificate
                            </label>
                            <Field
                              name={`education.${index}.degree`}
                              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                              value={values.education[index].degree}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                            />
                            <ErrorMessage
                              name={`education.${index}.degree`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor= {`education.${index}.graduationDate`}
                              className="block text-sm font-medium text-gray-700"
                            > 
                              Graduation Date
                            </label>
                            <Field
                              name={`education.${index}.graduationDate`}
                              type="date"
                              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                              value={values.education[index].graduationDate}
                              onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                            />
                            <ErrorMessage
                              name={`education.${index}.graduationDate`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
                        type="button"
                        onClick={() =>{
                          let index = 0
                          push({
                            schoolName:localStorage.getItem(`education.${index +1}.schoolName`) || "",
                            location:  localStorage.getItem(`education.${index +1}.location`) || "",
                            degree:  localStorage.getItem(`education.${index +1}.degree`) || "",
                            graduationDate:  localStorage.getItem(`education.${index +1}.graduationDate`) || "",
                          })
                        }}
                      >
                        <b>+</b> Add School
                      </button>
                    </div>
                  )}
                </FieldArray>

                <FieldArray name="skills">
                  {({ push, remove }) => (
                    <div className="mb-4">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Skills
                      </label>
                      <div className="flex flex-wrap items-center border border-gray-300 rounded p-2">
                        {values.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="ml-2 text-red-500"
                            >
                              x
                            </button>
                          </span>
                        ))}
                        <Field
                          name="skills"
                          type="text"
                          as="textarea"
                          value={skillInput}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSkillInput(e.target.value)}
                          onKeyDown={(e:React.KeyboardEvent<HTMLTextAreaElement>) => e.key === "Enter" ? (push(skillInput.trim()), setSkillInput('')):null}
                          
                          className="flex-grow p-2 focus:outline-none"
                          placeholder="Type a skill and press Enter"
                        />
                      </div>
                    
                      <ErrorMessage
                        name="skills"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  )}
                </FieldArray>

                <FieldArray name="awards">
        {({ push, remove }) => (
          <div className="mb-4">
            <label htmlFor="awards" className="block text-sm font-medium text-gray-700">
              Awards
            </label>
            <div className="flex flex-wrap items-center border border-gray-300 rounded p-2">
              {values.awards.map((award, index) => (
                <span
                  key={index}
                  className="bg-green-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                >
                  {award}
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="ml-2 text-red-500"
                  >
                    x
                  </button>
                </span>
              ))}
              <Field
               name="awards"
                type="text"
                as="textarea"
                value={awardInput}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAwardInput(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === "Enter" ? (push(awardInput.trim()), setAwardInput('')) : null}
                className="flex-grow p-2 focus:outline-none"
                placeholder="Type an award and press Enter"
              />
            </div>
            <ErrorMessage name="awards" component="div" className="text-red-500 text-sm mt-1" />
          </div>
        )}
      </FieldArray> 

                <div className="mb-4">
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn
                  </label>
                  <Field
                    name="linkedin"
                    className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handelFieldChange(e,handleChange)}
                    value={values.linkedin}
                  />
                  <ErrorMessage
                    name="linkedin"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                type="submit"
               
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
              </div>
            
            </Form>
          )}
        </Formik>
      </div>
      <div className=" flex-1  flex  justify-center ">
        
        {ChosenTemp ? (
         <div className='  '> <button
         onClick={downloadPDF}
         style={{
           padding: "10px 15px",
           background: "#007BFF",
           color: "#fff",
           border: "none",
           borderRadius: "5px",
           cursor: "pointer",
           marginBottom: "10px",
         }}
       >
         Download as PDF
       </button><div ref={contentRef} id="cv" className="h-fit w-fit"><ChosenTemp  prop={formData}/></div></div>
        ) : (
         <div className="flex justify-center items-center h-screen w-full">
          <Link to="/templates" className="flex items-center justify-center flex-col"> 
          <h1 className="text-2xl font-bold mb-6 text-center">Choose Tamplate</h1>
          <span className="text-7xl">📄</span>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateCv;
