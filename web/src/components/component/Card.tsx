import { ObjectId } from 'mongodb';
import React from 'react';
import Link from 'next/link';
import Like from '@/components/component/Like';
import Copy from './Copy';
import * as Comp from '@compui/comps';

interface CardProps {
  id: ObjectId;
  code: string;
  title: string;
  description: string;  
  category: string;
  props: any;
  likes: number;
}

const Card = ({ id,  code, title, description, category, props, likes}: CardProps) => {
  const Component = Comp[title];
  return (
    <div className="flex flex-col justify-between w-full p-4 m-4 rounded-lg shadow-lg">
      <div className='flex justify-center m-10 '>
        <Component {...props}/>
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <Link href={`/component/${id}`} className="inline-block p-3 mr-2 text-sm font-semibold text-gray-700 bg-blue-500 rounded-full">
          Details
        </Link>
        <Copy code={code} showCode={false}/>
      </div>
      <div className="flex justify-between px-6 py-4">
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="flex items-center mt-4">
         <Like compId={id.toString()}/>
        </div>
      </div>
    </div>
  );
};

export default Card;