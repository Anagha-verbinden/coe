import React from "react";
import StatCard from "../components/StatCard";
import { CirclePlus, BookOpen, Archive, Hourglass, Share2 } from "lucide-react";
import ProgramActivity from "../components/ProgramActivity";
import { useState } from "react";

const Programs = () => {
  return (
    <div className="programs-page">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[30px] font-bold">
          List of Programs Data and their Status
        </h1>
        <button className="flex items-center rounded-xl gap-2 bg-[#2161f5] px-5 py-3 text-lg text-white">
          <CirclePlus size={20} />
          Create Program
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[22px]">
        <StatCard icon={BookOpen} value={"9"} label={"Total Programs"} />
        <StatCard icon={Share2} value="7" label="Programs Shared" />

        <StatCard icon={Archive} value="1" label="Archived Programs" />

        <StatCard icon={Hourglass} value="2" label="Pending Distribution" />
      </div>
      <p className="mt-8 text-lg italic leading-relaxed text-gray-700">
        This tab allows you to create and manage programs. First create a new
        program using the{" "}
        <span className="text-[#2161f5]">“Create Program”</span> button on top
        right. Once a new program has been created, then click on the{" "}
        <span className="text-[#2161f5]">“edit icon”</span> to add content. Once
        the content has been published, then click on the{" "}
        <span className="text-[#2161f5]">“Share”</span> icon to share with
        universities.
      </p>
      <ProgramActivity/>
    </div>
  );
};

export default Programs;
