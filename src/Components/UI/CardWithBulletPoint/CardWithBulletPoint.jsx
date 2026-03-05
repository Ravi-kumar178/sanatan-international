import React from "react";

const CardWithBulletPoint = ({ label, items }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8">
      <p className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-black mb-4">
        {label}
      </p>
      <div className="space-y-3 text-sm text-slate-600">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-orange-500"></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWithBulletPoint;
