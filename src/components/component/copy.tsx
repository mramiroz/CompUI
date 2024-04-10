"use client";
import copysvg from "../../../public/copy.svg";
import { useState } from "react";
import Image from "next/image";

export default function Copy({code}: {code: string}) {
  const [value, setValue] = useState(code);
  const handleChange = (e:any)=>{
    setValue(e.target.value);
  }

  return (
    <div>
      <textarea value={code} onChange={handleChange} className="hidden"></textarea>
      <button onClick={() => navigator.clipboard.writeText(code)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Image src={copysvg} alt="copy" width={20} height={20}/>
      </button>
    </div>
  );
}