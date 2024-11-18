import soft from "../../../public/soft.png";
import civil from "../../../public/civil.png";
import Link from "next/link";
import Image from "next/image";

export default function CreateCv() {
  return (
    <div className="max-w-screen-lg p-5 lg:p-0 min-h-screen lg:mt-[50px] mb-10 mx-auto">
      <Link href="/">
        <button className="flex items-center space-x-1 text-[#12284c] font-bold hover:text-blue-700 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
      </Link>
      <div className="flex flex-col py-8 items-center gap-5">
        <h1 className="md:text-3xl text-center text-2xl text-[#12284c] font-bold"> Get Inspired with Resume Samples Written  <br/> by Certified Professional Resume Writers</h1>
        <h1 className="font-bormal text-center text-gray-600 ">
        Explore our vast library of over 600 resume examples tailored to most professions and industries. Our team of Certified Professional Resume Writers makes sure that every guide includes a relevant resume example and actionable tips to apply when creating your own resume.
        </h1>
        </div>
      <div className="flex lg:flex-row flex-col lg:ml-[200px] justify-items-center items-center gap-16">
        <div>
          <div className="relative flex flex-col hover:bg-[#F4F9FD] w-full items-center hover:scale-105 hover:border-2 border-[#12284c] transition-transform duration-300">
            <Image className="p-5 border-2 shadow-md" src={soft} width={300} height={200} />
            <Link href="/dashsideber/contectinfo">
              <button className="absolute inset-0 flex items-center justify-center    rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-semibold text-center text-sm p-2 rounded-lg ">Select Template</h1>
              </button>
            </Link>
          </div>
        </div>
        <div>
        <div className="relative flex flex-col hover:bg-[#F4F9FD] w-full items-center hover:scale-105 hover:border-2 border-[#12284c] transition-transform duration-300">
            <Image className="p-5 border-2 shadow-md" src={soft} width={300} height={200} />
            <Link href="/dashsideber/contectinfo">
              <button className="absolute inset-0 flex items-center justify-center    rounded-md  opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-semibold text-center text-sm p-2 rounded-lg ">Select Template</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
