import React from "react";

const Quote = ({
  label = "",
  sanskrit = "",
  description = "",
  className = "",
  sanskritClassName = "",
}) => {
  return (
    <div className={className}>
      <p className="text-[10px] uppercase tracking-[0.4em] text-orange-500 font-black">
        {label}
      </p>
      <p className={sanskritClassName}>
        {sanskrit}
      </p>
      <p className="block mt-3 text-base text-slate-500 font-serif-elegant italic">
        {description}
      </p>
    </div>
  );
};

export default Quote;
