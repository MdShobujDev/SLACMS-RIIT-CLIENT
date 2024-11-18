"use client"; // Ensure this component is treated as a client component

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { toast } from "react-toastify";
import { useStep } from "../../dashsideber/setprovider/page";

export default function Info() {
  const { nextStep } = useStep();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      instituteName: "",
      location: "",
      instituteCode: "",
      clssStartDate: "",
      technology: "",
      semester: "",
    },
    onSubmit: async (values) => {
      try {
        const instituteInfoValues = { instituteInfo: values };
        const response = await axios.put(
          `https://slacms-riit-server-ashen.vercel.app/api/routines/928d0f8b-3f29-4180-bfef-366571110ce9/instituteInfo`,
          instituteInfoValues
        );

        if (response.data.statusText === "ok") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          nextStep();
          router.push("/routinedash/routinetime");
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

  const diplomaSubjects = [
    { value: "civil_engineering", label: "Civil Engineering" },
    { value: "computer_technology", label: "Computer Technology" },
    { value: "electrical_technology", label: "Electrical Technology" },
    { value: "mechanical_technology", label: "Mechanical Technology" },
    { value: "automobile_technology", label: "Automobile Technology" },
    {
      value: "architecture_and_interior_design",
      label: "Architecture And Interior Design",
    },
    {
      value: "telecommunication_technology",
      label: "Telecommunication Technology",
    },
    { value: "textile_technology", label: "Textile Technology" },
    { value: "environmental_technology", label: "Environmental Technology" },
    { value: "surveying", label: "Surveying" },
    { value: "food_technology", label: "Food Technology" },
    { value: "chemical_technology", label: "Chemical Technology" },
    { value: "marine_technology", label: "Marine Technology" },
  ];

  return (
    <div className="w-full   mb-5 mx-auto">
      <Link href="/">
        <button className="flex items-center space-x-1 text-[#12284c] font-bold hover:text-blue-700 transition-colors duration-200">
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
      </Link>
      <div className="py-6">
        <h1 className="font-bold text-3xl">
          Display Key Details and Data Insights in a User-Friendly <br />{" "}
          Component Interface?
        </h1>
        <p className="font-normal text-gray-500 pt-2 text-lg">
          We suggest including your institute name and location .
        </p>
      </div>
      <div className="mb-10">
        <div>
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="instituteName"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Institute Name
                </label>
                <input
                  id="instituteName"
                  name="instituteName"
                  type="text"
                  placeholder="e.g Rangpur Ideal Institute Of Technology"
                  onChange={formik.handleChange}
                  value={formik.values.instituteName}
                  className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Location
                </label>
                <input
                  id="loaction"
                  name="location"
                  type="text"
                  placeholder="e.g Central,Road,Rangpur"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                  className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="instituteCode"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Institute Code
                </label>
                <input
                  id="instituteCode"
                  name="instituteCode"
                  type="text"
                  placeholder="e.g. 16100"
                  onChange={formik.handleChange}
                  value={formik.values.instituteCode}
                  className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="clssStartDate"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Class Start Date
                </label>
                <input
                  id="clssStartDate"
                  name="clssStartDate"
                  type="date"
                  placeholder="e.g. Bnagladesh"
                  onChange={formik.handleChange}
                  value={formik.values.clssStartDate}
                  className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="technology"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Technology
                </label>
                <Select
                  placeholder="Select Subject"
                  id="technology"
                  name="technology"
                  styles={customStyles}
                  className="text-[#726f6f]"
                  options={diplomaSubjects}
                  onChange={(diplomaSubjects) =>
                    formik.setFieldValue("technology", diplomaSubjects.value)
                  }
                  onBlur={formik.handleBlur}
                  value={diplomaSubjects.find(
                    (diplomaSubjects) =>
                      diplomaSubjects.value === formik.values.technology
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="semester"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Semester
                </label>
                <input
                  id="semester"
                  name="semester"
                  type="text"
                  placeholder="e.g. 4th"
                  onChange={formik.handleChange}
                  value={formik.values.semester}
                  className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex pt-5 justify-between">
              <div></div>

              <button
                type="submit"
                className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
              >
                Next : Time & Period
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
