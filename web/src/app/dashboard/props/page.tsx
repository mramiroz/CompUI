"use client";
import { useEffect, useState } from "react"
import { Button } from "@zabui/comps"
import getProps from "@/actions/Props/getProps"
import Label from "@/components/dashboard/LabelProps";
import deleteProp from "@/actions/Props/deleteProp";

export default function Dashboard(){
  const [props, setProps] = useState([]);
  const [page, setPage] = useState(1);

  useEffect (() => {
    const fetchData = async () => {
      const res = await getProps(page, 10);
      setProps(res as any);
    }
    fetchData();
  }, [page]);

  const isLastPage = props.length < 10;

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 my-10">
        <Button href="/dashboard/props/create" backColor="#1F2F71">
          Create Prop
        </Button>
      </div>
      <div>
          {Array.isArray(props) && props.map((item, index) => (
            <Label key={index}  prop={item} onDelete={async () => deleteProp((item as any)._id)}/> 
          ))}
      </div>
      <div className="my-4">
      <button 
          className={`font-bold py-2 px-4 rounded ${page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button 
          className={`font-bold py-2 px-4 rounded ml-4 ${isLastPage ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </button>
      </div>
        
    </>
  )
}