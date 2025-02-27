"use client";

import CountUp from "react-countup";

export default function KPI({ text, value }: { text: string; value: number }) {
  return (
    value && (
      <div className="flex flex-col items-center justify-center">
        <CountUp
          end={value}
          duration={2}
          className="text-2xl font-bold text-darkgoldenrod"
        />
        {/* <h2 className="text-2xl font-bold text-darkgoldenrod">{value}</h2> */}
        <p>{text}</p>
      </div>
    )
  );
}
