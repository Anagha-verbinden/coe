import React from "react";

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div
      className="
        flex h-[140px] w-[315px] items-center
        gap-[22px] rounded-2xl bg-white p-6
        shadow-[0_2px_6px_rgba(0,0,0,0.12)]
      "
    >
      <div
        className="
          flex h-[84px] w-[84px] shrink-0
          items-center justify-center
          rounded-md bg-[#eaf0ff] text-[#2161f5]
        "
      >
        <Icon size={40} />
      </div>

      <div>
        <h3 className="m-0 text-[28px] font-semibold text-[#111111]">
          {value}
        </h3>

        <p className="mt-[6px] text-lg leading-[1.4] text-[#737b8c]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;