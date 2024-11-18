"use client"; // Ensure this component is treated as a client component

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useStep } from "../../dashsideber/setprovider/page";

export default function Info() {
  const router = useRouter();
  const { nextStep } = useStep();

  // Initialize state for periods
  const [periods, setPeriods] = useState([
    {
      periodName: "",
      classStartTime: "",
      classEndTime: "",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      classPeriods: periods,
    },
    onSubmit: async (values) => {
      try {
        const classPeriodsValues = { classPeriods: values.classPeriods };
        const response = await axios.put(
          `https://slacms-riit-server-ashen.vercel.app/api/routines/928d0f8b-3f29-4180-bfef-366571110ce9/classPeriods`,
          classPeriodsValues
        );
        if (response.data.statusText === "ok") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          nextStep();
          router.push("/routinedash/sundayroutine");
        }
      } catch (error) {
        console.error({ message: error.message });
      }
    },
  });

  const handleAddPeriod = () => {
    setPeriods([
      ...periods,
      {
        periodName: "",
        classStartTime: "",
        classEndTime: "",
      },
    ]);
  };

  const handleRemovePeriod = (index) => {
    const newPeriods = periods.filter((_, idx) => idx !== index);
    setPeriods(newPeriods);
    formik.setFieldValue("classPeriods", newPeriods);
  };

  const handlePeriodChange = (index, event) => {
    const { name, value } = event.target;
    const newPeriods = [...periods];
    newPeriods[index][name] = value;
    setPeriods(newPeriods);
    formik.setFieldValue("classPeriods", newPeriods);
  };

  return (
    <div className="w-full mb-5 mx-auto">
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
          Proven Strategies for Effective and Efficient Time <br /> Management
          Skills
        </h1>
        <p className="font-normal text-gray-500 pt-2 text-lg">
          We suggest including time and class period
        </p>
      </div>
      <div className="mb-10">
        <div className="bg-white w-[1000px] h-[400px]">
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
            <div className="grid grid-cols-1 gap-5">
              {periods.map((period, index) => (
                <div key={index} className="grid grid-cols-1 gap-5 items-end">
                  <div>
                    <label
                      htmlFor={`periodName-${index}`}
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Period
                    </label>
                    <input
                      id={`periodName-${index}`}
                      name="periodName"
                      type="text"
                      placeholder="e.g 1"
                      onChange={(event) => handlePeriodChange(index, event)}
                      value={period.periodName}
                      className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5 itemes-center">
                    <div>
                      <label
                        htmlFor={`classStartTime-${index}`}
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Class Start Time
                      </label>
                      <input
                        id={`classStartTime-${index}`}
                        name="classStartTime"
                        type="time"
                        onChange={(event) => handlePeriodChange(index, event)}
                        value={period.classStartTime}
                        className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`classEndTime-${index}`}
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Class End Time
                      </label>
                      <input
                        id={`classEndTime-${index}`}
                        name="classEndTime"
                        type="time"
                        onChange={(event) => handlePeriodChange(index, event)}
                        value={period.classEndTime}
                        className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePeriod(index)}
                        className="inline-flex ml-[700px] py-2 font-semibold px-4 border border-transparent bg-red-500 shadow-sm text-md rounded-md text-white hover:bg-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div>
                <button
                  type="button"
                  onClick={handleAddPeriod}
                  className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-green-500 shadow-sm text-md rounded-md text-white hover:bg-green-700"
                >
                  Add Period
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <div></div>

              <div className="flex gap-5 items-center">
                <Link href="/routinedash/routinetitle">
                  <div className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500">
                    Preview : Information
                  </div>
                </Link>

                <button
                  type="submit"
                  className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md rounded-md text-white hover:bg-black"
                >
                  Next : Sunday
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
