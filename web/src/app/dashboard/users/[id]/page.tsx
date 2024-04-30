"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ObjectId } from 'mongodb';

interface UserData{
  _id: ObjectId;
  username: string;
  email: string;
  role: string;
  favComps: ObjectId[];
}

export default function Update(){
  const [user, setUser] = useState({} as UserData);
  const { id } = useParams();
  useEffect(() => {
      fetch(`/api/users/${id}`)
          .then(res => res.json())
          .then(data => setUser(data))
          .catch(err => console.error(err));
  }, []);

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col w-full max-w-md p-8 mx-auto space-y-4 bg-gray-900 rounded-lg shadow-md">
            <h1 className="mb-4 text-xl font-bold text-center">Update User</h1>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Name:</label>
                    <input type="text" id="name" name="name" value={user.username} className="p-2 text-black border rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} className="p-2 text-black border rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-bold">Role:</label>
                    <select id="role" name="role" value={user.role} className="p-2 text-black border rounded-md">
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Update</button>
                </div>
            </form>
        </div>
      </div>
  )   
}