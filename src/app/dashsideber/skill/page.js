"use client"; // Ensure this component is treated as a client component

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { toast } from "react-toastify";
import { useStep } from "../setprovider/page";

export default function SkillInfo() {
  const router = useRouter();
  const { nextStep } = useStep();

  const formik = useFormik({
    initialValues: {
      expertise: [],
      comfortable: [],
      tools: [],
    },
    onSubmit: async (values) => {
      try {
        const skillValues = { skills: values };
        const response = await axios.put(
          `https://slacms-riit-server-ashen.vercel.app/api/resumes/6f02b2af-2228-4f88-a017-710ae6463b4e/skills`,
          skillValues
        );
        console.log(skillValues);

        if (response.data.status === false) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          nextStep();
          router.push("/dashsideber/project");
        }
      } catch (error) {
        console.error({ message: error.message });
      }
    },
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #9CA3AF",
      borderRadius: "0.30rem",
      padding: "0.2rem",
      width: "100%",
      boxShadow: state.isFocused ? "0 0 0 1px #12284C" : "none",
      "&:hover": {
        // borderColor: "#12284C",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#12284C" : "#fff",
      color: state.isSelected ? "#fff" : "#726f6f",
      "&:hover": {
        backgroundColor: "#12284C",
        color: "#fff",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#726f6f",
    }),
    menu: (provided) => ({
      ...provided,
      border: "1px solid #12284C",
      borderRadius: "0.30rem",
    }),
  };

  const options = [
    // Programming Languages
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Ruby", label: "Ruby" },
    { value: "Go", label: "Go" },
    { value: "Swift", label: "Swift" },
    { value: "PHP", label: "PHP" },
    { value: "Kotlin", label: "Kotlin" },

    // Libraries
    { value: "React", label: "React" },
    { value: "Lodash", label: "Lodash" },
    { value: "jQuery", label: "jQuery" },
    { value: "NumPy", label: "NumPy" },
    { value: "Pandas", label: "Pandas" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Spring Boot", label: "Spring Boot" },
    { value: "Express.js", label: "Express.js" },

    // Frameworks
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },
    { value: "Laravel", label: "Laravel" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "Spring", label: "Spring" },
    { value: "Flutter", label: "Flutter" },
    { value: "Electron", label: "Electron" },

    // Databases
    { value: "MySQL", label: "MySQL" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "SQLite", label: "SQLite" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Oracle", label: "Oracle" },
    { value: "Microsoft SQL Server", label: "Microsoft SQL Server" },
    { value: "Redis", label: "Redis" },
    { value: "MariaDB", label: "MariaDB" },
    { value: "Cassandra", label: "Cassandra" },
    { value: "Elasticsearch", label: "Elasticsearch" },
    {
      value: "Firebase Realtime Database",
      label: "Firebase Realtime Database",
    },
    { value: "Amazon DynamoDB", label: "Amazon DynamoDB" },

    // Server-Side Languages
    { value: "Node.js", label: "Node.js" },
    { value: "Ruby", label: "Ruby" },
    { value: "PHP", label: "PHP" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C#", label: "C#" },
    { value: "Go", label: "Go" },
    { value: "Perl", label: "Perl" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "Kotlin", label: "Kotlin" },
  ];

  const programmingTools = [
    { value: "Visual Studio Code", label: "Visual Studio Code" },
    { value: "Sublime Text", label: "Sublime Text" },
    { value: "Atom", label: "Atom" },
    { value: "Eclipse", label: "Eclipse" },
    { value: "IntelliJ IDEA", label: "IntelliJ IDEA" },
    { value: "NetBeans", label: "NetBeans" },
    { value: "Xcode", label: "Xcode" },
    { value: "PyCharm", label: "PyCharm" },
    { value: "WebStorm", label: "WebStorm" },
    { value: "Brackets", label: "Brackets" },
    { value: "Notepad++", label: "Notepad++" },
    { value: "Jupyter Notebook", label: "Jupyter Notebook" },
    { value: "Git", label: "Git" },
    { value: "GitHub", label: "GitHub" },
    { value: "GitLab", label: "GitLab" },
    { value: "Bitbucket", label: "Bitbucket" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Postman", label: "Postman" },
    { value: "Swagger", label: "Swagger" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Travis CI", label: "Travis CI" },
    { value: "Maven", label: "Maven" },
    { value: "Gradle", label: "Gradle" },
    { value: "Ant", label: "Ant" },
    { value: "Webpack", label: "Webpack" },
    { value: "Babel", label: "Babel" },
    { value: "ESLint", label: "ESLint" },
    { value: "Prettier", label: "Prettier" },
    { value: "Redux", label: "Redux" },
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Node.js", label: "Node.js" },
    { value: "Express", label: "Express" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Spring", label: "Spring" },
    { value: "Laravel", label: "Laravel" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "Sass", label: "Sass" },
    { value: "Less", label: "Less" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Foundation", label: "Foundation" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },
    { value: "Figma", label: "Figma" },
    { value: "Sketch", label: "Sketch" },
    { value: "Adobe XD", label: "Adobe XD" },
  ];

  return (
    <div className="w-full   mb-5 mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center space-x-1 text-[#12284c] font-bold hover:text-blue-700 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Back</span>
      </button>
      <div className="py-6">
        <h1 className="font-bold text-3xl">
          Tell us about your technology experience
        </h1>
        <p className="font-normal text-gray-500 pt-2 text-lg">
          Start with your most recent experience and work backward.
        </p>
      </div>
      <div className="mb-10">
        <div className="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="expertise"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Expertise
                </label>
                <Select
                  placeholder="Search and select your skill"
                  id="expertise"
                  name="expertise"
                  isMulti
                  styles={customStyles}
                  required
                  className="text-[#726f6f]"
                  onBlur={formik.handleBlur}
                  options={options}
                  onChange={(option) =>
                    formik.setFieldValue(
                      "expertise",
                      option ? option.map((option) => option.value) : []
                    )
                  }
                  value={options.find(
                    (option) => option.value === formik.values.expertise
                  )}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="comfortable"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Comfortable
                </label>
                <Select
                  placeholder="Search and select your skill"
                  id="comfortable"
                  name="comfortable"
                  isMulti
                  required
                  styles={customStyles}
                  className="text-[#726f6f]"
                  options={options}
                  onBlur={formik.handleBlur}
                  onChange={(option) =>
                    formik.setFieldValue(
                      "comfortable",
                      option ? option.map((option) => option.value) : []
                    )
                  }
                  value={options.find(
                    (option) => option.value === formik.values.comfortable
                  )}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="tools"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Tools
                </label>
                <Select
                  placeholder="Search and select your skill"
                  id="tools"
                  name="tools"
                  isMulti
                  styles={customStyles}
                  required
                  className="text-[#726f6f]"
                  options={programmingTools}
                  onBlur={formik.handleBlur}
                  onChange={(option) =>
                    formik.setFieldValue(
                      "tools",
                      option ? option.map((option) => option.value) : []
                    )
                  }
                  value={options.find(
                    (option) => option.value === formik.values.tools
                  )}
                />
              </div>
            </div>

            <div className="flex pt-5 justify-between">
              <div></div>

              <div className="flex gap-5 items-center">
                <Link href="/dashsideber/education">
                  <div className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500">
                    Preview : Education
                  </div>
                </Link>

                <button
                  type="submit"
                  className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
                >
                  Next : Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
