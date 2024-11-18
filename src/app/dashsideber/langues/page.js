"use client"; // Ensure this component is treated as a client component

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { toast } from "react-toastify";
import { useStep } from "../setprovider/page";

export default function SkillInfo() {
  const { nextStep } = useStep();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      bangla: null,
      english: null,
      hindi: null,
    },
    onSubmit: async (values) => {
      try {
        const languageValues = { languages: values };
        const response = await axios.put(
          `https://slacms-riit-server-ashen.vercel.app/api/resumes/6f02b2af-2228-4f88-a017-710ae6463b4e/languages`,
          languageValues
        );

        if (response.data.status === false) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          nextStep();
          router.push("/dashsideber/resume");
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

  const Type = [
    { value: "Native", label: "Native", percent: 100 },
    { value: "Advanced", label: "Advanced", percent: 90 },
    { value: "Beginner", label: "Beginner", percent: 50 },
    { value: "Convertional", label: "Convertional", percent: 60 },
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
        <h1 className="font-bold text-3xl">Languages</h1>
        {/* <p className="font-normal text-gray-500 pt-2 text-lg">Start with your most recent experience and work backward.</p> */}
      </div>
      <div className="mb-10">
        <div clasName="bg-white w-[1000px]  h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="bangla"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Bnagla
                </label>
                <Select
                  placeholder="Select Type"
                  id="bangla"
                  name="bangla"
                  styles={customStyles}
                  className="text-[#726f6f]"
                  options={Type}
                  onChange={(option) =>
                    formik.setFieldValue("bangla", option.percent)
                  }
                  onBlur={formik.handleBlur}
                  value={Type.find(
                    (option) => option.value === formik.values.bangla
                  )}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="english"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  English
                </label>
                <Select
                  placeholder="Select Type"
                  id="english"
                  name="english"
                  styles={customStyles}
                  className="text-[#726f6f]"
                  options={Type}
                  onChange={(option) =>
                    formik.setFieldValue("english", option.percent)
                  }
                  onBlur={formik.handleBlur}
                  value={Type.find(
                    (option) => option.value === formik.values.english
                  )}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="hindi"
                  className="block text-sm pb-1 font-semibold text-gray-900"
                >
                  Hindi
                </label>
                <Select
                  placeholder="Select Type"
                  id="hindi"
                  name="hindi"
                  styles={customStyles}
                  className="text-[#726f6f]"
                  options={Type}
                  onChange={(option) =>
                    formik.setFieldValue("hindi", option.percent)
                  }
                  onBlur={formik.handleBlur}
                  value={Type.find(
                    (option) => option.value === formik.values.hindi
                  )}
                />
              </div>
            </div>

            <div className="flex pt-5 justify-between">
              <div></div>

              <div className="flex gap-5 items-center">
                <Link href="/dashsideber/project">
                  <div className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500">
                    Preview : Project
                  </div>
                </Link>

                <button
                  type="submit"
                  className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
                >
                  Ready Resume
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
