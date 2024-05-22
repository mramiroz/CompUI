"use client"; 
import { useEffect, useState } from 'react';
import {useParams } from 'next/navigation';
import Copy  from '../../../components/component/Copy'
import * as Comps from '@zabui/comps';
import getComponentById from '@/actions/Comps/getComponentById';
import propsDataJSON from '@/lib/data/props.json';
import ComponentCode from '@/components/component/ComponentCode';

interface PropsData{
  [key: string]: {
    description: string;
    type: string;
    input: boolean;
  }
}

interface ComponentData {
  _id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  component: string;
  import: string;
  props: any;
}

export default function Show() {
  const param = useParams();
  const [component, setComponent] = useState<ComponentData | null>(null);
  const [propsValues, setPropsValues] = useState<{[key: string]: string}>({});
  const propsData : PropsData = JSON.parse(JSON.stringify(propsDataJSON));
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getComponentById({id: param.id as string}) as ComponentData;
      setComponent(res);
      setPropsValues(res.props);
    }
    fetchData();
  }, [param.id]);

  const handleInputChange = (prop: string, e: any) => {
    setPropsValues({...propsValues, [prop]: e.target.value});
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-4">
      {component && (
        <>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h1 className='mb-4 text-4xl font-bold'>{component.title}</h1>
          <ComponentCode component={component} props={propsValues}/>
          <p className="mb-4 text-base">{component.description}</p>
        </div>
        <div className="w-full max-w-md p-4 rounded shadow md:w-1/2">
          <h2 className="mb-2 text-2xl font-semibold">Props:</h2>
          <ul className="list-inside">
            {Object.entries(component.props).map(([prop, value]) => (
              <li key={prop} className="p-2 mb-4 border rounded">
                <div className="mb-2 text-base">
                  <strong>{prop}</strong>: {propsData[prop]?.description || "No description given"}
                </div>
                <div>
                  {propsData[prop]?.input ===true && (
                      <input 
                        type="text"
                        value={propsValues[prop]} 
                        onChange={(e) => handleInputChange(prop, e)} 
                        className='w-full p-2 text-black border rounded-md'
                      />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        </>
      )}
    </div>
  );
}