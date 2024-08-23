"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Resume() {
  const [resumeData, setResumeData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/resumes/6f02b2af-2228-4f88-a017-710ae6463b4e"
      );

      if (response.data) {
        setResumeData(response.data);
        setIsLoading(!isLoading);
      } else {
        console.log("Data not found");
      }
    } catch (error) {
      console.error({ message: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto p-8 border-2 max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              {resumeData.contact.fristName} {resumeData.contact.surName}
            </h1>
            <h2 className="text-xl">{resumeData.contact.profession}</h2>
            <div className="flex justify-center space-x-4 mt-4">
              <span>📞 {resumeData.contact.phone}</span>
              <span>✉️ {resumeData.contact.email}</span>
              <span>
                📍 {resumeData.contact.city}, {resumeData.contact.country}
              </span>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href={resumeData.contact.protfolio}
                target="_blank"
                className="text-blue-500"
              >
                Portfolio
              </a>
              <a
                href={resumeData.contact.linkeind}
                target="_blank"
                className="text-blue-500"
              >
                LinkedIn
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                className="text-blue-500"
              >
                GitHub
              </a>
            </div>
          </header>

          <section className="mb-8 ">
            <h3 className="text-2xl border-b-4 border-black  font-bold mb-4">
              SKILLS
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold">EXPERTISE</h4>
              <p>
                {resumeData.skills.expertise.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < resumeData.skills.expertise.length - 1 && ",  "}
                  </span>
                ))}
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">COMFORTABLE</h4>
              <p>
                {resumeData.skills.comfortable.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < resumeData.skills.comfortable.length - 1 && ",  "}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">TOOLS</h4>
              <p>
                {" "}
                {resumeData.skills.tools.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < resumeData.skills.tools.length - 1 && ",  "}
                  </span>
                ))}
              </p>
            </div>
          </section>
          {/* ================Projects Details Section=================== */}
          <section>
            <h3 className="text-2xl  border-b-4 border-black  font-bold mb-4">
              PROJECTS
            </h3>

            {/* =========project_1========== */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg">
                {resumeData.projects.project_1.projectName}
              </h4>
              <div className="flex space-x-4">
                <a
                  href={resumeData.projects.project_1.liveLink}
                  className="text-blue-500"
                >
                  Demo
                </a>
                <a
                  href={resumeData.projects.project_1.frontendRepoLink}
                  className="text-blue-500"
                >
                  Frontend Code
                </a>
                <a
                  href={resumeData.projects.project_1.backendRepoLink}
                  className="text-blue-500"
                >
                  Backend Code
                </a>
              </div>
              <p className="mt-2">
                {resumeData.projects.project_1.discription}
              </p>
              <p className="mt-2">
                <strong>Utilized Technologies: </strong>
                {resumeData.projects.project_1.utilizedTechnologies.map(
                  (item, index) => (
                    <span key={index}>
                      {item}
                      {index <
                        resumeData.projects.project_1.utilizedTechnologies
                          .length -
                          1 && " | "}
                    </span>
                  )
                )}
              </p>
              <ul className="list-disc list-inside mt-2">
                {resumeData.projects.project_1.keyAttributes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* =========project_2========== */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg">
                {resumeData.projects.project_2.projectName}
              </h4>
              <div className="flex space-x-4">
                <a
                  href={resumeData.projects.project_2.liveLink}
                  className="text-blue-500"
                >
                  Demo
                </a>
                <a
                  href={resumeData.projects.project_2.frontendRepoLink}
                  className="text-blue-500"
                >
                  Frontend Code
                </a>
                <a
                  href={resumeData.projects.project_2.backendRepoLink}
                  className="text-blue-500"
                >
                  Backend Code
                </a>
              </div>
              <p className="mt-2">
                {resumeData.projects.project_2.discription}
              </p>
              <p className="mt-2">
                <strong>Utilized Technologies: </strong>
                {resumeData.projects.project_2.utilizedTechnologies.map(
                  (item, index) => (
                    <span key={index}>
                      {item}
                      {index <
                        resumeData.projects.project_2.utilizedTechnologies
                          .length -
                          1 && " | "}
                    </span>
                  )
                )}
              </p>
              <ul className="list-disc list-inside mt-2">
                {resumeData.projects.project_2.keyAttributes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* =========project_3========== */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg">
                {resumeData.projects.project_3.projectName}
              </h4>
              <div className="flex space-x-4">
                <a
                  href={resumeData.projects.project_3.liveLink}
                  className="text-blue-500"
                >
                  Demo
                </a>
                <a
                  href={resumeData.projects.project_3.frontendRepoLink}
                  className="text-blue-500"
                >
                  Frontend Code
                </a>
                <a
                  href={resumeData.projects.project_3.backendRepoLink}
                  className="text-blue-500"
                >
                  Backend Code
                </a>
              </div>
              <p className="mt-2">
                {resumeData.projects.project_3.discription}
              </p>
              <p className="mt-2">
                <strong>Utilized Technologies: </strong>
                {resumeData.projects.project_3.utilizedTechnologies.map(
                  (item, index) => (
                    <span key={index}>
                      {item}
                      {index <
                        resumeData.projects.project_3.utilizedTechnologies
                          .length -
                          1 && " | "}
                    </span>
                  )
                )}
              </p>
              <ul className="list-disc list-inside mt-2">
                {resumeData.projects.project_3.keyAttributes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* ================Education Section=================== */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold border-b-4 border-black   mb-4">
              EDUCATION
            </h3>
            <div>
              <h4 className="font-semibold">{resumeData.education.degree}</h4>
              <a href="#" className="text-blue-500">
                {resumeData.education.instituteName}
              </a>
              <div className="flex space-x-2 mt-1">
                <span>
                  📅 {resumeData.education.graduationStartDate} __{" "}
                  {resumeData.education.graduationEndDate}
                </span>
                <span>📍 {resumeData.education.location}, Bangladesh</span>
              </div>
            </div>
          </section>

          {/* ================Languages Section=================== */}
          <section className="mb-8  ">
            <h3 className="text-2xl font-bold border-b-4 border-black   mb-4">
              LANGUAGES
            </h3>
            <div className=" grid gap-5 -ml-[24px] grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-28 justify-between">
                  <h1 className=" font-semibold">Bangla</h1>
                  {/* <h1 className=" text-sm">Native</h1> */}
                </div>
                <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full flex items-center justify-end pr-2"
                    style={{
                      width: `${resumeData.languages.bangla}%`,
                    }}
                  >
                    {" "}
                    <span className=" text-white text-[8px]">
                      {resumeData.languages.bangla}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-24 justify-between">
                  <span className="font-semibold">English</span>
                  {/* <span className=" text-sm">Advance</span> */}
                </div>
                <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full flex items-center justify-end pr-2 "
                    style={{
                      width: `${resumeData.languages.english}%`,
                    }}
                  >
                    <span className=" text-white text-[8px]">
                      {resumeData.languages.english}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-28 justify-between">
                  <span className=" font-semibold">Hindi</span>
                  {/* <span className="text-sm">Beginer</span> */}
                </div>
                <div className="w-[230px] bg-gray-300 rounded-full h-2.5 ml-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full flex items-center justify-end pr-2"
                    style={{
                      width: `${resumeData.languages.hindi}%`,
                    }}
                  >
                    {" "}
                    <span className=" text-white text-[8px]">
                      {resumeData.languages.hindi}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className=" text-xl font-bold text-gray-400">Loading...</h1>
        </div>
      )}
    </>
  );
}
