"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// src/components/Timetable.js

export default function Routine() {
  const [routineData, setRoutineData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://slacms-riit-server-ashen.vercel.app/api/routines/928d0f8b-3f29-4180-bfef-366571110ce9"
      );

      console.log(response.data);
      if (response.data) {
        setRoutineData(response.data);
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

  const timetable = [
    {
      day: "Sunday",
      periods: [
        "28542 US Hardware Lab",
        "28541 HA 506 29041 SI 506",
        "",
        "28544 EH 506",
      ],
    },
    {
      day: "Monday",
      periods: [
        "28543 SA 606",
        "28542 US 606 26841 SN 606",
        "28541 HA 506 29041 SI 506",
        "",
        "28544 EH 506",
      ],
    },
    {
      day: "Tuesday",
      periods: [
        "28543 SA Hardware Lab",
        "28543 US 506 29041 SI 506",
        "28541 HA 506",
        "",
        "28544 EH 506",
      ],
    },
    {
      day: "Wednesday",
      periods: [
        "28543 SA 506 26841 SN 506 28531 LK 506 28541 HA 506",
        "28531 LK 604 28543 SA 604",
        "",
        "28544 EH 604",
      ],
    },
    {
      day: "Thursday",
      periods: [
        "28544 EH 604 28543 SA 604 28531 LK 604",
        "26841 SN Electronics Lab",
      ],
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="container mx-auto p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Timetable</h1> */}
          <table className="table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">Day</th>
                {routineData.classPeriods.map((item) => (
                  <th key={item} className="border border-black px-4 py-2">
                    {item.periodName}
                  </th>
                ))}
              </tr>
              <tr>
                <th className="border border-black px-4 py-2">Time</th>
                {routineData.classPeriods.map((item) => (
                  <th key={item} className="border border-black px-4 py-2">
                    {item.classStartTime}-{item.classEndTime}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {routineData.weeklyRoutine.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{item.day}</td>
                  {routineData.classPeriods.map((period, index) => (
                    <td key={index} className="border border-black px-4 py-2">
                      {item.periods.map((i) => (
                        <span key={i}>
                          {period.periodName == i.period
                            ? `${i.subjectName} ${i.subjectCode} ${i.roomNumber} ${i.teacherName} ${i.phoneNumber}`
                            : null}
                        </span>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className=" text-xl font-bold text-gray-400">Loading...</h1>
        </div>
      )}
    </>
  );
}
