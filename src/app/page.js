import Image from "next/image";
import Link from "next/link";
import cv from "../../public/cv.jpg";
import ru from "../../public/routine.jpg";
export default function Home() {
  return (
    <div className="flex flex-col items-center   justify-between py-10  md:p-24">
      {" "}
      <div className="flex flex-col pb-5 items-center gap-5">
        <h1 className="md:text-4xl text-center text-2xl text-[#12284c] font-bold"> Student Life And Career Managesmnet System <br/> (SLACMS)</h1>
        <h1 className="font-normal text-center text-gray-600 text-lg md:text-xl">
        Professional Resume & Routine Maker Tools <br/>
        Create a job-winning resume and routine in minutes with our  easy-to-use builder
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-items-center items-center lg:pt-[50px] gap-10 lg:gap-16">
        <Link href="/createcv">
          {" "}
          <div className="flex flex-col items-senter">
            <Image className="rounded-xl  hover:border-4 border-[#12284c]" src={cv} width={200} height={200} />

            <h1 className="text-center text-gray-600 font-semibold">Create Resume</h1>
          </div>
        </Link>

        <Link href="/createroutin">
          <div className="flex flex-col  items-senter">
            <Image className="rounded-xl hover:border-4 border-[#12284c]" src={ru} width={200} height={200} />

            <h1 className="text-center  text-gray-600 font-semibold">Create Routine</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
