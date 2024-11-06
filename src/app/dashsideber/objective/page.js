"use client"; // Ensure this component is treated as a client component

import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useStep } from "../setprovider/page";

export default function Objective() {
  const router = useRouter();
  const { nextStep } = useStep();

  const formik = useFormik({
    initialValues: { object: "" },
    onSubmit: async (values) => {
      try {
        const objectValue = { object: values.object };
        const response = await axios.put(
          `https://slacms-riit-server-ashen.vercel.app/api/resumes/6f02b2af-2228-4f88-a017-710ae6463b4e/object`,
          objectValue
        );
        console.log(objectValue);
        if (response.data.status === false) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          nextStep();
          router.push("/dashsideber/education");
        }
      } catch (error) {
        console.error({ message: error.message });
      }
    },
  });

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
          What do you do? Tell me about yourself and <br /> describe your aim.
        </h1>
        <p className="font-normal text-gray-500 pt-2 text-lg">
          We suggest including an important key word and make it simple
        </p>
      </div>
      <div className="mb-10">
        <div>
          <form onSubmit={formik.handleSubmit} className="space-y-4 w-[800px]">
            <div>
              <label
                htmlFor="object"
                className="block text-sm font-semibold text-gray-900"
              >
                Objective
              </label>
              <textarea
                row={10}
                id="object"
                name="object"
                type="text"
                required
                placeholder="e.g. I am Ashikur Rahman Ovi....."
                onChange={formik.handleChange}
                value={formik.values.object}
                className="mt-1 p-3 block w-full border text-lg text-gray-600 border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex pt-5 justify-between">
              <div></div>

              <div className="flex gap-5 items-center">
                <Link href="/dashsideber/contectinfo">
                  <div className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#FFC85E] shadow-sm text-md  rounded-md text-[#12284c]  hover:bg-red-500">
                    Preview : Contact
                  </div>
                </Link>

                <button
                  type="submit"
                  className="inline-flex justify-center py-2 font-semibold px-4 border border-transparent bg-[#12284c] shadow-sm text-md  rounded-md text-white  hover:bg-black"
                >
                  Next : Education
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
