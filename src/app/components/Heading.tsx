import React from "react";

interface type {
  title: string;
  subtitle: string;
}

function Heading({ title, subtitle }: type) {
  return (
    <>
      
      <h1 className="pt-8 font-bold text-4xl text-center ">
        {title}</h1>
      <p className="text-[#6c757d] text-center px-8 mt-2">{subtitle}</p>
    </>
  );
}

export default Heading;
