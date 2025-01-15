import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";

interface DisplayTempProp {
  ChosenTemp: React.ReactNode | null;
}
function CreateCv({ ChosenTemp }: DisplayTempProp) {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(
        /^[0-9]{3} [0-9]{3} [0-9]{4}$/,
        "Phone must be in the format 123-456-7890"
      )
      .required("Phone is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    jobTitle: Yup.string().required("Job Title is required"),
    summary: Yup.string().required("Summary is required"),

    workExperience: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("Company name is required"),
        jobTitle: Yup.string().required("Job title is required"),
        location: Yup.string().required("Location is required"),
        startDate: Yup.date()
          .nullable()
          .required("Start date is required")
          .typeError("Invalid date format"),
        endDate: Yup.date()
          .nullable()
          .when("isCurrentJob", {
            is: false,
            then: (schema) =>
              schema
                .required("End date is required")
                .min(
                  Yup.ref("startDate"),
                  "End date must be after the start date"
                )
                .typeError("Invalid date format"),
            otherwise: (schema) => schema.nullable(),
          }),
        isCurrentJob: Yup.boolean(),
        responsibilities: Yup.string().required(
          "Responsibilities are required"
        ),
      })
    ),
    education: Yup.object().shape({
      schoolName: Yup.string().required("School name is required"),
      location: Yup.string().required("Location is required"),
      degree: Yup.string().required("Degree/Certificate is required"),
      graduationDate: Yup.date().required("Graduation date is required"),
    }),

    linkedin: Yup.string().url("Invalid LinkedIn URL"),
  });

  const [skillInput, setSkillInput] = useState("");
  const [awardInput, setAwardInput] = useState('');


  return (
    <div className="flex justify-around overflow-hidden">
      <div className=" flex-1  bg-orange-200">
        <Formik
          initialValues={{
            fullName: "",
            address: "",
            phone: "",
            email: "",
            jobTitle: "",
            summary: "",
            workExperience: [
              {
                companyName: "",
                jobTitle: "",
                location: "",
                startDate: "",
                endDate: "",
                isCurrentJob: false,
                responsibilities: "",
              },
            ],
            education: [
              {
                schoolName: "",
                location: "",
                degree: "",
                graduationDate: "",
              },
            ],

            skills: [],
            awards: [],
            linkedin: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
              <div className="h-screen overflow-y-auto bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-6 text-center">
                  Resume Input Form
                </h1>

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
                        onClick={() =>
                          push({
                            companyName: "",
                            jobTitle: "",
                            location: "",
                            startDate: "",
                            endDate: "",
                            isCurrentJob: false,
                            responsibilities: "",
                          })
                        }
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
                            />
                            <ErrorMessage
                              name={`education.${index}.degree`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="education.${index}.graduationDate"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Graduation Date
                            </label>
                            <Field
                              name="education.${index}.graduationDate"
                              type="date"
                              className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage
                              name="education.${index}.graduationDate"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4"
                        type="button"
                        onClick={() =>
                          push({
                            schoolName: "",
                            location: "",
                            degree: "",
                            graduationDate: "",
                          })
                        }
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
                  />
                  <ErrorMessage
                    name="linkedin"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-6/12 scale-90">
        {" "}
        {ChosenTemp ? (
          ChosenTemp
        ) : (
          <Link to="/templates">
            <div> Choose Tamplate</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CreateCv;
