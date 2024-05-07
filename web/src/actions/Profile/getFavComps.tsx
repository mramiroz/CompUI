"use server";
import Component from "@/models/Component";
import User from "@/models/User";
import { ObjectId } from "mongodb";

export default async function getFavComps({id}: {id: ObjectId}) {
  const user = await User.findById(id);
  if (!user) {
    return {message: "User not found", status: 404};
  }
  const favComps = user.favComps;
  if (!favComps || favComps.length === 0) {
    return {message: "No favorite components found", status: 404};
  }
  const comps = await Component.find({_id: {$in: favComps}});
  if (!comps) {
    return {message: "No components found", status: 404};
  }
  return comps;
}