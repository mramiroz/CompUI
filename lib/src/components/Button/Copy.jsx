"use client";
import copysvg from "../../../svg/copy.svg";
import { useState } from "react";
import Image from "next/image";

export default function Copy({text}) {
  const [value, setValue] = useState(text);
  const handleChange = (e)=>{
    setValue(e.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleChange} className="hidden">{copysvg}</textarea>
      <button onClick={() => navigator.clipboard.writeText(text)} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        <Image src={copysvg} alt="copy" width={20} height={20}/>
      </button>
    </div>
  );
}